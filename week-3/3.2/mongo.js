const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://admin1:sachu123@cluster0.qjdltxh.mongodb.net/user_app",
).then(() => console.log("connected"));

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(email, password) {
  const user = await User.findOne({ email: email });
  if(user){
    return true
  }
  return false
}

app.post('/signup', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  // CRUD => create, read, update, delete
  if (await userExists(email, password)) {
    return res.status(400).send('user already exists');
  }
  const user = new User({
    name: name,
    email: email,
    password: password
  });
  user.save().then(() => console.log('user added to database'));
  res.send('user added to database successfully');
})
app.post("/signin", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  if (userExists(email, password) === null) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db pls signup first",
    });
  }

  var token = jwt.sign({ email: email }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const email = decoded.email;
    const allUsers = await User.find();
    const users = allUsers.filter((user) => user.email !== email);
    res.json(users);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("something went wrong at server side");
});
app.listen(3000);