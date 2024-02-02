// function getLength(str) {
//   console.log("Original String:", str);
//   console.log("Length:", str.length);
// }
// getLength("Hello World");
// console.log("this is a string".length);

// function findIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.indexOf(target));
// }
// findIndexOf("Hello World", "World");
// console.log("hello sushil and arushi".indexOf('arushi'));

// function findLastIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.lastIndexOf(target));
// }
// findLastIndexOf("Hello World World", "World");
// console.log('hello sushil sushil'.lastIndexOf("sushil"));


// function getSlice(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After slice:", str.slice(start, end));
// }
// getSlice("Hello World", 0, 5); 

// console.log("sushil kumar".slice(0, 6));

// function getSubstring(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After substring:", str.substring(start, end));
// }
// getSubstring("Hello World", 0, 5);
// console.log('sushil kumar'.substring(0, 5));

// let value = "Hello World";
// console.log(value.substr(6, 5));


// function cutIt(str, start, end) {
//   let newStr = '';
//   for(let i = 0; i < str.length; i++) {
//     if(i >= start && i < end){
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }
// console.log(cutIt("hello world", 0 , 5));

// function replaceString(str, target, replacement) {
//   console.log("Original String:", str);
//   console.log("After replace:", str.replace(target, replacement));
// }
// replaceString("Hello World", "World", "JavaScript");

// const str =  "Hello World";
// console.log(str.replace("Hello", "holla"));

// function splitString(str, separator) {
//   console.log("Original String:", str);
//   console.log("After split:", str.split(separator));
// }
// splitString("Hello World", " ");

// const value = "hello word is very awesome";
// console.log(value.split(" "));

// function trimString(str) {
//   console.log("Original String:", str);
//   console.log("After trim:", str.trim());
// }
// trimString(" Hello World ");

// const value = "      hello world      ";
// console.log(value.trim());

// function toUpper(str) {
//   console.log("Original String:", str);
//   console.log("After toUpperCase:", str.toUpperCase());
// }
// toUpper("Hello World");

// const str = "HELLO WORLD"

// console.log(str.toLowerCase());

// ****** Numbers *******
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
// explainParseInt("42");
// explainParseInt("42px");
// explainParseInt("3.14");

// console.log(parseFloat("43.6hkshsd"));

//  ***** arrays *****

// const startArray = [1,2,3];
// startArray.push(4); // add at end
// startArray.push(5); // 
// startArray.pop(); // remove at end
// startArray.shift(); // remove at start
// startArray.unshift(5); //add at start
// console.log(startArray);


// function concatExample(arr1, arr2) {
//   console.log("Original Arrays:", arr1, arr2);

//   let arr3 = arr1.concat(arr2);
//   console.log("After concat:", arr3);
// }
// concatExample([1, 2, 3], [4, 5, 6]);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 2, 3];
// console.log(arr2.concat(arr1));

// for(let i = 0; i < arr2.length; i++) {
//   arr1.push(arr2[i]);
// }
// console.log(arr1);


// function forEachExample(arr) {
//   console.log("Original Array:", arr);

//   arr.forEach(function(item, index) {
//     console.log(item, index);
//   });
// }
// forEachExample([1, 2, 3]);

// const arr = [1, 2, 3];

// function logThing(str){
//   console.log(str);
// }
// arr.forEach(logThing);


// ****** classes ********************************

// class Animal {
//   constructor(name,  legCount, speaks){
//     this.name = name;
//     this.legCount = legCount;
//     this.speaks = speaks;
//   }
//   // static methods can be called direclty with class name
//   static myType(){
//     console.log("Animal");
//   }
//   speak(){
//     console.log("hi there  " + this.speaks);
//   }
// }

// let dog = new Animal("dog", 4, "bhow bhow");
// let cat = new Animal("cat", 4, "meow");

// cat.speak();

// Animal.speak();

// ******** date *********
// const currentDate =  new Date();

console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate);