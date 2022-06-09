const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

//prettier-ignore
const letters = {
  "a": {
    "name": "Alfa",
  }, 
  "b": {
    "name": "Bravo",
  }, 
  "c": {
    "name": "Charlie",
  }, 
  "d": {
    "name": "Delta",
  }, 
  "e": {
    "name": "Echo",
  }, 
  "f": {
    "name": "Foxtrot",
  }, 
  "g": {
    "name": "Golf",
  }, 
  "h": {
    "name": "Hotel",
  }, 
  "i": {
    "name": "India",
  }, 
  "j": {
    "name": "Juliett",
  }, 
  "k": {
    "name": "Kilo",
  }, 
  "l": {
    "name": "Lima",
  }, 
  "m": {
    "name": "Mike",
  }, 
  "n": {
    "name": "November",
  }, 
  "o": {
    "name": "Oscar",
  }, 
  "p": {
    "name": "Papa",
  }, 
  "q": {
    "name": "Quebec",
  }, 
  "r": {
    "name": "Romeo",
  }, 
  "s": {
    "name": "Sierra",
  }, 
  "t": {
    "name": "Tango",
  }, 
  "u": {
    "name": "Uniform",
  }, 
  "v": {
    "name": "Victor",
  }, 
  "w": {
    "name": "Whiskey",
  }, 
  "x": {
    "name": "X-ray",
  }, 
  "y": {
    "name": "Yankee",
  }, 
  "z": {
    "name": "Zulu",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(letters);
});

app.get("/api/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  let arr = name.split("").map((el) => `${letters[el].name}`);
  console.log(arr);
  res.send(arr.join("<br>"));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`);
});
