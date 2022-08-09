const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const names = [{ name: "Rima", surname: "Sakalauskaite" }];

app.get("/names", (req, res) => {
  res.send(names);
});

app.post("/names", (req, res) => {
  names.push(req.body);
  res.send(req.body);
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost${PORT}`)
);
