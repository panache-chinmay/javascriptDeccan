// ECMA screen 2015

// Basically three types of function

// Function declartion , Function expression and arrow function

// Function without paramter and return type

// The best way to define variable in javascript ECMA 2015 is declaring with
// const keyword



// ----> Basic arrow function

// Type one :- function declaration

// const name = "chinmay"
//
// function sayName(){
//   const message  = "My name is "+name;
//   console.log(message);
// }
//
// function sayBye(){
//   const message = "Bye "+ name
//   console.log(message);
//
// }
// sayName()
// sayBye()



//Type two :- function expression
//
// const name = "chinmay"
//
// const sayName = function(){
//   const message  = "My name is "+name;
//   console.log(message);
// }
//
// const sayBye = function(){
//   const message = "Bye "+ name
//   console.log(message);
//
// }
// sayName()
// sayBye()


// Type three :- arrow functions


// const name = "chinmay"
//
// const sayName = () => {
//   const message  = "My name is "+name;
//   console.log(message);
// }
//
// const sayBye = () => {
//   const message = "Bye "+ name
//   console.log(message);
//
// }
// sayName()
// sayBye()




// Using arguments with arrow functions

// Arrow function with single arguments and with multiple arguments are similar

// with function expression

// function square(x){
//   return x * x
// }
//
// function cube(x){
//   return square(x) * x
// }
// console.log(square(5));
// console.log(cube(5));


// arrow function with single arguments

// const square = (x) => {
//   return x * x
// }
// const cube = (x) => {
//   return square(x) * x
// }
//
// console.log(square(5));
// console.log(cube(5));

// arrow function with multiple arguments

// const multiplication = (x,y) => {
//   return x * y
// }
// const addition = (x, y) => {
//   return x + y
// }
// const division = (x, y) => {
//   return x / y
// }
// const subtraction =(x,y) => {
//   return x - y
// }
//
// console.log(multiplication(20,5));
// console.log(addition(20,5));
// console.log(division(20,5));
// console.log(subtraction(20,5));

// More concise way of writing arrow function


// function with single argument we donot need round braces and
// function with single statement with donot need curly braces and return keyword

// making it more consile way of using arrow functions


// function declartion in more concise way

// Function declaration
// function divideOne(a,b){
//   return a / b ;
// }
// // Function expression
// const divideTwo = function (a,b){
//   return a / b ;
// }
// // Arrow function
// const divideThree =  (a,b) => {
//   return a / b ;
// }
// // concise arrow function
// const divideFour = (a,b) => a/b;
//
// console.log(divideOne(5,6));
// console.log(divideTwo(5,6));
// console.log(divideThree(5,6));
// console.log(divideFour(5,6));
