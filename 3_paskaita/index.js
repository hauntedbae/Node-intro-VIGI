const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// "/" - base path (pagrindinis kelias) pvz.: local host:3000/
// req - sutrumpinimas request zodzio. Kvietims is vartotojo puses
// res - sutrumpinimas response zodzio. Grazinimas is serverio dalies

const cars = ["Audi"];

app.get("/", function (req, res) {
  res.send(cars);
});

app.post("/", (req, res) => {
  console.log(req.body);
  cars.push(req.body.car);
  res.send(req.body);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
