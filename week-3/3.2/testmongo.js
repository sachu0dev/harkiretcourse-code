const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://admin1:sachu123@cluster0.qjdltxh.mongodb.net/user_app").then(() => console.log('connected'));

const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
});

app.post('/signup', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const existingUser = await User.findOne({ email: email });
  // CRUD => create, read, update, delete
  if (existingUser) {
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
app.use((err,req,res,next)=>{
  console.log(err)
  res.status(500).send("something went wrong at server side");
})
app.listen(3000);