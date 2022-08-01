const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// "/" - base path (pagrindinis kelias) pvz.: local host:3000/
// req - sutrumpinimas request zodzio. Kvietims is vartotojo puses
// res - sutrumpinimas response zodzio. Grazinimas is serverio dalies

app.get("/", function (req, res) {
  console.log(req);
  res.send(["BMW", "Audi", "VW"]);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
