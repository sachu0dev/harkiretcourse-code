// callback needed here because it asks for it 
const fs = require('fs');
// // filesystem module

// fs.readFile("a.txt", "utf-8", function(err, data){
//   console.log(data);
// });

// console.log("hi there");
// let a = 0;
// for(let i = 0; i < 1000000000; i++){
//   a++;
// }
// console.log("hello there");
// calback for are convienience not really necessary
// function square(n){
//   return n * n;
// }
// function cube(n){
//   return n * n * n;
// }

// function sumOfSomething(a,b, fn){
//   const val1 = fn(a);
//   const val2 = fn(b);
//   return val1 + val2;
// }

// console.log(sumOfSomething(2,2,square));

// function sushilReadFile(){
//   return new Promise(function(resolve){
//     fs.readFile("a.txt", "utf-8", function(err, data){   
//       resolve(data);
//     });
//   });
// }

// // callback function to call
// function onDone(data){
//   console.log(data);
// }
// sushilReadFile().then(onDone);

function printAsync(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("resoled");
    }, 1000);
  })
}

async function main(){
  // no callbacks no .then syntax
  console.log(await printAsync());
  console.log("hi there")
}
main();
console.log("after main");