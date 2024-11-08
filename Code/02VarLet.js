console.log("JavaScript tutorial 3: var, let and const");
let b = "Hello";
const author = "John";
author = 5; // Throws an error because constant cannot be changed
b = 4;
const con = 0;
let c = null;
let d = undefined;
{
  let b = "this";
  console.log(b);
}
console.log(b);
