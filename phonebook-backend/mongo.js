const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

//to atlas
//const url = `mongodb+srv://lm:${password}@cluster0.wjzfbsx.mongodb.net/?retryWrites=true&w=majority`;
const url = "mongodb://127.0.0.1:27017";

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (!name) {
  Person.find({}).then((persons) => {
    persons.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
  });
}

if (name && number) {
  const person = new Person({
    name: name,
    number: number,
  });

  person.save().then((result) => {
    console.log(
      `added person ${person.name} number ${person.number} to phonebook`
    );
    mongoose.connection.close();
  });
}
