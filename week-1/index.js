// function findSum(n){
//   let sum = 0;
//   for(let i = 1; i <=n; i++){
//     sum += i;
//   }
//   return sum;
// }
// console.log(findSum(100));


function square(n){
  return n * n
}
function cube(n){
  return n * n * n
}

function sumOfSomething(a,b, callback){
  const val1 = callback(a,b);
  const val2 = callback(b,a);
  return val1 + val2;
}
const result = sumOfSomething(2,2, function (n){
  return n* n* n;
});
console.log(result);