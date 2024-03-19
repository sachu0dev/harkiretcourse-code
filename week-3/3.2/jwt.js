// 1 generate jwt
// 2 decode jtw
// 3 verify jwt
const jwt = require("jsonwebtoken");
const secret = "haveThiSecret";

const value = {
  name: "sushil",
  email: "sushilkumar@gmail.com"
}

const token = jwt.sign(value, secret);

try {
  const decode = jwt.verify(token, secret);
  console.log(decode)
}
catch (err) {
  console.log("error: unable to decode token")
}