const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];
function userExists(username, password) {
  for (const user of ALL_USERS) {
    if (user.username === username && user.password === password) {
      return true;
    }
  }
  return false;
}
app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  if (userExists(username, password)) {
    return res.status(403).json({
      msg: "User already exists, try to signin",
    });
  }

  ALL_USERS.push({
    username,
    password,
    name
  });
  return res.json({
    msg: "User created successfully can now try to signin",
  });
})
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db pls signup first",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const a = ALL_USERS.find((user) => user.username === username);
    if(!a){
      throw new Error("user not found")
    }
    const users = ALL_USERS.filter((user) => user.username !== username);
    res.json(users)
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token, users not found",
    });
  }
});
app.use((err, req, res, next) => {
  console.log(err);
})
app.listen(3000)