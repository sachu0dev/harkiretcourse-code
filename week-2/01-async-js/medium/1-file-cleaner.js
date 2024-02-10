const fs = require('fs');

fs.readFile("a.txt", 'utf-8', (error,data)=>{
  let data = data;
  console.log(data);
})