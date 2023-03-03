require("dotenv").config();
const express = require("express");
const Person = require("./models/person");

const app = express();

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

app.use(express.static("build"));

const cors = require("cors");

app.use(cors());

app.use(express.json());

var morgan = require("morgan");

morgan.token("data", function (req, res) {
  return JSON.stringify({
    name: req.body.name,
    number: req.body.number,
  });
});

var logger = morgan("tiny");

app.use(function (req, res, next) {
  if (req.method === "POST") {
    return next();
  }
  logger(req, res, next);
});

app.get("/api/persons", (request, response) => {
  Person.find({})
    .then((persons) => {
      response.json(persons);
    })
    .catch((error) => next(error));
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = Person.find((person) => person.id === id)
    .then(response.json(person))
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  Person.findByIdAndRemove(id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.all("/info", (request, response) => {
  response
    .send(
      `<div><p>Phonebook has info for ${
        persons.length
      } people</p><p>${new Date()}</p></div>`
    )
    .catch((error) => next(error));
});

app.use(logger, morgan(":data"));

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  // if (persons.find((p) => p.name === person.name)) {
  //   return response.status(400).json({
  //     error: "name must be unique",
  //   });
  // }

  person
    .save()
    .then((savedPerson) => {
      response.json(savedPerson);
    })
    .catch((error) => next(error));
});

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
