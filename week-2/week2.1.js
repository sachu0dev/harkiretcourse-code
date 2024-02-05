// callbacks
// function square(n){
//   return n*n;
// }
// function cube(n){
//   return n*n*n;
// }
// function quad(n){
//   return n*n*n*n;
// }

// function sumOfSomething(a,b,fn){
//   let value1 = fn(a);
//   let value2 = fn(b);
//   return value1 + value2;
// }

// console.log(sumOfSomething(1,2,cube));


// async functions
const fs = require('fs');
let a = "first console";
console.log(a);

fs.readFile("a.txt", "utf8", (err, data)=>{
  console.log("this is read from file: " + data);
});
let ans = 0;
for(let i=0; i< 100; i++){
  ans += i;
}
console.log(ans);





