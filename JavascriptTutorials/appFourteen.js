// Declaring variable in javascript

// let and constant keywork

// Some behaviour of using var variable can be problamatic and unexpeted


// ES2015 sixth version of javascript
// ECMA script 2015


// var message = "hello";
// const pi = 3.14159;
// let score = 0;


// Creating a unchanging variable with const

// once you create the constant variable , you can uodate

// product prices and components of your UI

// Use of cons keyword and it solves the problem of scopes

// problem statement one

// var  name = "Chinmay";
//
// function Onename(){
//   name = name + " Deshpande";
//   console.log(name + " within function")
// }
//
// console.log(name);
// Onename();
// console.log("After the function is called");
// console.log(name);

// The value of the original variable changes

// problem statement two
const name = "Chinmay"
//const  name = "Chinmay"
function Twoname(){

  const name = "Deshpande"
  console.log(name);

  // scope of this variable is within function scope only
}

console.log(name)
Twoname()

// Type Error assignment to the variable constant not allowed .

// const does not prevent complex data struture like array and object from being modified
// Reassigning a person with new object will throw error
// you can ressign properties of same objects with different values


// let  is similar to assign variable through .
// let is very silmilar to var
// let allows you reassign the variable


// let variable have block level scope


// let keywords are specially useful in for loops
