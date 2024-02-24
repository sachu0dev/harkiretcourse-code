const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin1:sachu123@cluster0.qjdltxh.mongodb.net/user_app").then(() => console.log('connected'));

const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
});

const user = new User({
  name: 'sushil',
  email: 'sushil@gmail',
  password: '123'
});
user.save().then(() => console.log('saved'));