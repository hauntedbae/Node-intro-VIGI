const express = require("express");

const cors = require("cors");

const PORT = 8080;

const app = express();

app.use(cors());

app.use(express.json());

const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

app.get("/cars/:model", (req, res) => {
  console.log(req.params.model);

  const selectedStuff = req.params.model;

  res.send(cars[selectedStuff]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
