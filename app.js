/** @format */

const express = require("express");
const app = express();

// "/" => "Hi there!"
app.get("/", function (req, res) {
  res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function (req, res) {
  res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function (req, res) {
  console.log("Someone made a request to /dog");
  res.send("MEOW!");
});

app.get("*", function (req, res) {
  console.log("Someone made a request to /*");
  res.send("You are a star!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
