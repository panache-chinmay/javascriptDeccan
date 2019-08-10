//program 1
// var randomNumber = Math.floor(Math.random()*6 + 1);
// //console.log(randomNumber);
// var guess = parseInt(prompt("I am thinking of number between 1 to 6. and what is that ?"));
// if(randomNumber === guess ){
//     document.write("<p> You guessed the number right!.</p>");
// } else {
//     document.write('<p>Sorry. The  number was '+ randomNumber + '</p>')
// }


// Program 2

// Boolean values
//
// if(false) {
//     document.write('<p>The condition is true </p>');
// } else {
//   document.write('<p>The condition is false </p>');
// }
//
// if(true) {
//     document.write('<p>The condition is true </p>');
// } else {
//   document.write('<p>The condition is false </p>');
// }

// Add conditions  are basically evaluated to true or false

// Adding boolean to random guess number will make program more flexible and let
// us response to the multiple outcomes .

//program 3

// var correctGuess = false;
// var randomNumber = Math.floor(Math.random()*6 + 1);
// //console.log(randomNumber);
// var guess = parseInt(prompt("I am thinking of number between 1 to 6. and what is that ?"));
// if(randomNumber ===  guess){
//   correctGuess = true ;
// }
// if(correctGuess){
//     document.write("<p> You guessed the number right!.</p>");
// } else {
//     document.write('<p>Sorry. The  number was '+ randomNumber + '</p>')
// }

// If we want more than two possible outcomes , then we have to use
// boolean values .

// program 4
// Improving the random number guess game.

// example of a multi-line comment:

/*
  The Random Number Guessing Game Generates a number between 1 to 6
  and gives a player who attemps to guess the number
*/

// var correctGuess = false;
// var randomNumber = Math.floor(Math.random()*6 + 1);
// var guess = parseInt(prompt("I am thinking of number between 1 to 6. and what is that ?"));
// if(randomNumber ===  guess){
//   correctGuess = true ;
// }
// else if( guess < randomNumber ) {
//   var guessMore = parseInt(prompt('Try again, the number I am thinking is more than '+ guess));
//     if(randomNumber ===  guessMore){
//       correctGuess = true ;
//     }
//   }
// else if(guess > randomNumber){
//   var guessLess = parseInt(prompt('Try again, the number I am thinking is less than '+ guess));
//   if(randomNumber === guessLess){
//       correctGuess = true ;
//   }
// }
// if(correctGuess){
//     document.write("<p> You guessed the number right!.</p>");
// } else {
//     document.write('<p>Sorry. The  number was '+ randomNumber + '</p>')
// }

// Program 5

&& operator and || operators
In case of any if statement , If the condition is met for the first block of the code , the code inside the
block will run and the remaining valid block will be skipped

// Asking the questions will have , a typical way , we can easily solve this things  using functions

// If one block of the code is answered correctly , it will not reach to the other
// condition
//quiz begins , no answers correct


 var correct = 0;
//
// ask questions
// var answerOne  = prompt("Name a programming language that's also a gem?");
// if(answerOne.toUpperCase() === "RUBY"){
//     correct += 1;
// }
// var answerTwo = prompt("Name a programming language that's also the name of snake?");
// if(answerTwo.toUpperCase() === "PYTHON"){
//   correct += 1;
// }
// var answerThree = prompt("What are the languages you do to style the web pages");
//   if(answerThree.toUpperCase() === "CSS"){
//     correct += 1;
//   }
//
// var answerFour = prompt("What are the languages you to structure the web pages?");
//     if(answerFour.toUpperCase() === "HTML"){
//       correct += 1;
//     }
// var answerFive = prompt("What are the languages you do to increase the interactivity of the webpages ");
//   if(answerFive.toUpperCase() === "JAVASCRIPT"){
//       correct += 1;
//   }

//  output results .


// document.write("<p>You got "+ correct +"out of 5 questions </p>")
//
// // output rank
//
// if(correct === 5){
//   document.write("<p><strong> You earned a gold crown </strong> </p>")
// } else if(correct >= 3){
//   document.write("<p><strong> you have earned a silver crown</strong></p>")
// } else  if(correct >= 1){
//   document.write("<p><strong> you have earned a bronze crown </strong></p>")
// }

//program 6

// Function Declaration

//

function alertRandoma(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  alert(randomNumber);
} // no need to add semi -colon

alertRandoma();
alertRandoma();
alertRandoma();

// Function Expression  or it is also called as anonymous function

// We are storing the function into varaible.
//i.e basically it is calles as

// we need to add semicolon

program 7
var alertRandom = function(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  alert(randomNumber);
}

alertRandom();
alertRandom();
alertRandom();

// Getting information from a function

// program 8

// Returning a random number .
//  function getRandomNumber(){
//   var randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }
//
// console.log(getRandomNumber());
// alert(getRandomNumber());
// var dieRoll = getRandomNumber();
// console.log(dieRoll);
// document.write();

// Return statement always returns one value
// Return statement exits the function immediatetly
// Return statement  shoud be the last statement in the function
// (You cannot return multiple things at once)

// program 9

// Giving information to the functions

// passing argument to the functions
// functions will have arguments
// Functions basically breaks the top to bottom flow of program

// Giving information to the function via arguments , saving them as parameter
// using them in function.


// Random Number  by setting upper limit to pass as a argument
//to the fucntion defintion which saves it as parameter
// program 10

var x = 10

// function randomNumberG(upper){
//   var x = Math.floor(Math.random()*upper) + 1;
//   return x;
// }
// console.log(randomNumberG(9));
// console.log(randomNumberG(90));
// console.log(randomNumberG(999));

// program 11

// Finding the area of the rectangle

// using 2 parameter
// function areaOfRectangle(length,width){
//   var area = length * width;
//   return area ;
// }
// console.log(areaOfRectangle(7,8));

// using three parameters
//
// function areaofRectangle(length,width,unit){
//    var areay = length * width ;
//    //console.log(areay);
//    return areay + " "+ unit;
// }
//
// console.log(areaofRectangle(2,3,"sq per unit"));
// console.log(areaofRectangle(2,3,"sq per unit"));

// Program 10

// Scope of variable


// We will end up adding multiple functions to your script

// Scope for variable  each function.


// Keeping two variable different

var wakeUp = "Hello";
function writingVar(){
  var wakeUp = "Sid";
  return wakeUp;
}
alert(writingVar());
alert(wakeUp);

// Changing global varaible inside a varaible .

// var wakeUp = "Hello";
// function writingVar(){
//    wakeUp = "Sid";
//   return wakeUp;
// }
// alert(wakeUp);
// alert(writingVar());

// var wakeUp = "Hello";
// function writingVar(){
//    wakeUp = "Sid";
//   return wakeUp;
// }
//
// alert(writingVar());
// alert(wakeUp);


// program 11
 // Using function set the upper and lower limit to generate random number
 //and update the same

function generateRandom(lower, upper){
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}
console.log(generateRandom(1,100));
console.log(generateRandom(101,200));
console.log(generateRandom(201,300));
console.log(generateRandom(301,400));

Breaking the program intentionally

console.log("nice" , 89);
console.log("nice" ,900);

The function just wont work if we pass one string value


// program 12


//https://stackoverflow.com/questions/9156176/what-is-the-difference-between-throw-new-error-and-throw-someobject

// Checking whether the user entered any "string" instead of number.

// function randomGenerator (lower , upper){
//   if(isNaN(lower) || isNaN(upper)){
//     // throw new Error('Both the numbers should be integers');
//      console.log("Both the arguments should be number");
//   }
//   return Math.floor(Math.random() * (upper - lower + 1) + lower);
//
// }
//
// console.log(randomGenerator(8 , 9));
// //randomGenerator(8 , 9);
// console.log(randomGenerator("New" , 9));
