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

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

fetch("http://localhost:8080/users")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);

    document.body.append(users);
  })
  .catch((error) => console.error(error));
