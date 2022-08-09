// prisideti importus, reikalingus express serveriui +
// susikurti express serveri +
// susikurti API su /users path, kuri sgrazins users tuscia masyva
// susikurti API su /links path kuris grazins links masyvus
// paleisti severi +

// sukurti POST API vartotojams, kuris pridės naują vartotoją į masyvą
// sukurti POST API vartotojams, kuris pridės naują linką į masyvą

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

const users = ["Admin"];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  users.push(req.body.users);
  res.send(req.body);
});

const links = ["https://www.google.com"];

app.get("/links", (req, res) => {
  res.send(links);
});

app.post("/links", (req, res) => {
  console.log(req.body);
  links.push(req.body.links);
  res.send(req.body);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
