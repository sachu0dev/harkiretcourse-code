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
// const fs = require('fs');
// let a = "first console";
// console.log(a);

// fs.readFile("a.txt", "utf8", (err, data)=>{
//   console.log("this is read from file: " + data);
// });
// let ans = 0;
// for(let i=0; i< 100; i++){
//   ans += i;
// }
// console.log(ans);


// console.log("hie");

// setTimeout(()=>{
//   console.log("hi there from inside");
// }, 5000);

// let a = 0;
// for(let i = 0; i < 10000; i++){
//   a += i;
// }
// console.log(a);

// const fs = require("fs");
// function putNewText(){
//   fs.readFile("a.txt", "utf8", (err, data)=>{
//     data = data + "new text added";
//     fs.writeFile("a.txt", data, ()=>{
//       console.log("done");
//     })
//   });
// }

// putNewText();
// function myOwnSetTimeout(cb,time){
//   setTimeout(cb, time);
// }

// myOwnSetTimeout(()=>{
//   console.log("hi there");
// }, 1000);

// 




