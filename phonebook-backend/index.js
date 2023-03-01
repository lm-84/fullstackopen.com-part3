require("dotenv").config();
const express = require("express");
const Person = require("./models/person");

const app = express();

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
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
    return;
  }
  response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id != id);
  response.status(204).end();
});

app.all("/info", (request, response) => {
  response.send(
    `<div><p>Phonebook has info for ${
      persons.length
    } people</p><p>${new Date()}</p></div>`
  );
});

app.use(logger, morgan(":data"));

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(1000),
  };

  if (persons.find((p) => p.name === person.name)) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  persons = persons.concat(person);

  response.json(person);
  return;
});

const generateId = (max) => {
  return Math.floor(Math.random() * max);
};

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
