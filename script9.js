//Before ECMA 2015 , There were only two ways of decalring functions

// Function Declaration and Function Expression


// Example One

// Function Declaration

/*
const name = "Andrew";
function sayName() {
  const message = "My name is "+name;
  console.log(message);
}
function sayBye(){
  console.log("Bye "+ name);
} */


// Function Expression


/*const name = "Andrew";
const sayName = function() {
  const message = "My name is "+name;
  console.log(message);
}
function sayBye(){
  console.log("Bye "+ name);
}*/


// sayName();
// sayBye();

// Example two

/*function square(x){
  return x * x ;
}

function cube(x){
  return square(x)*x;
} */

// Function Expression

/*
var square = function(x){
  return cube(x) * x;
}

var cube = function(x){
  return square(x) * x;
} */



// Example three

/*

 function multiply(x , y){
  return x * y;
}
function add( a, b){
  return a + b;
}
function subtraction(a,b){
  return a - b;
}

*/


/* var multiple = function(x,y){
    return x * y;
}

var add = function(a,b){
  return a + b ;
}

var subtraction(a,b){
    return a -b ;
} */

/*

1)  All above mentioned files are function declaration and function expression
 converting them to arrow function.

2) Arrow function are basically concise in size and solve common javascript gotcha relating to
 scope of variable

 3) Arrow functions  expression are functions similar to function expression


 3 a) Remove the keyword function expression :-
*/


// program A with arrow function
const name = "Andrew";
const sayName = () => {
  const message = "My name is "+name;
  console.log(message);
}
const sayBye = () => {
  console.log("Bye "+ name);
}


// program B with arrow function
/*
  using paramters with arrow function
*/


// sayName();
// sayBye();


const square = (x) => {
  return x * x ;
}

const cube = (x) =>{
  return square(x) * x;
}

// square(9);
// cube(9);


// Program 3 (Arrow function with multiple paramerters)

const multiply = (x,y) => {
  return x * y
}

const add = (x,y) => {
  return x + y
}

const subtraction = (x,y) => {
  return x - y
}

// multiple(9,9);
// add(9,9);
// subtraction(9,9);

// concise arrow function syntax

  // If the arrow function take single parameter we can remove parentheses

  // If you donot have more than one line , you can also remove return  keyword


  //  you can also remove {} if you don't have more than one statement in block code

  // program One

  const squarey = x => x * x;
  const cubey = x => square(x) * x;
  console.log(squarey(10));
  console.log(cubey(10));

  //program Two

  const multiplyr = (x,y) => x * y;
  const addr = (x,y) =>  x + y;
  const subtractionr = (x,y) =>  x - y;

  console.log(multiplyr(7,8));
  console.log(addr(7,8));
  console.log(subtractionr(30,15));

  // Program Three
  const namey = "Andrew";
  const sayNamee = () => {
    const message = "My name is "+namey;
    console.log(message);
  }
  const sayByee = () => console.log("Bye "+ namey  );
  sayNamee();
  sayByee();


// Function Declaration

function divide1(a,b){
  return a / b;
}

//Function Expression

const divide2 = function(a,b){
  return a / b;
}

// Arrow function Expression

const divide3 = (a,b) => {
  return a / b;
}

// Concise --> Arrow function

const divide4 = (a,b) => return a / b;

// All the above function perform the similar task.
// All the browsers support the arrow fucntion syntax.
