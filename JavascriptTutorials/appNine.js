// Introduction to loops, Arrays ,and Objects

// Loops allow you to use same set of objects again and again

// Arrays helps us to store the lots of information insystematic way

// Object is the another way of storing information and is frequently used

//Before know these course you should know

// Simple variables
// Conditional statments
// Numbers
// String
// Booleans
// functions
// loops - while for do while


// Arrays -->

// What are loops

// Loops helps you to carry out certain action for x number of times or until the condition is meet .


// While loop

// The code in while block will run as long as the condition inside the while
//block is true

// In while loop , the condition is evaluted befor the loop

// If the test condition is not true in beginning the loop inside code will not work

// Check the variable inside the loop which will evalute the condition to False

// You also need a way to break out of a loop

//



// No semi colon after the Brackets

// Printing 1000 random numbers using function and while loop

// Javascript runs through the programme , looks for the syntax errors and also
//remembers the function


// // Program One
//
// function randomGenerator (upper){
//   var randomNumber = Math.floor(Math.random()*upper)+1;
//   return randomNumber;
// }
//
// var counter = 0 ;
// while(counter < 10000){
//   document.write(randomGenerator(1000) +" ");
//   counter += 1;
// }
//
//
// // Let's break this program down
//
// // Program --> Get a random number between 1 to 1000
// // print the number and make the computer guess the number
// // print the number of attempts computer take to print the number
//
//
// Program 2
// Do while loop
//
// console.log('Hello');
//
// var upper = 10000;
// var randomNumber = getRandomNumber(upper);
// var attempts = 0;
// var guess;
//
// function getRandomNumber (upper){
//   return Math.floor(Math.random()* upper ) + 1;
// }
//
// while(guess !== randomNumber){
//   guess = getRandomNumber(upper);
//   attempts += 1;
// }
// document.write("<p> The random number is " + randomNumber +"</p>");
// document.write("<p> The number of attempts required to guess randomNumber "+ attempts +" attempts to get it </p>");
//
//
// // Program 3
// // do{
// //
// //
// // }while(//condition)
//
// // Do while loop will execute the block of statements aleast once
// // Do while can be used to get the response aleast once(Asking user to input email address)
// // Making the do while condition false by using variable
// // We need to change condition inside the while loop false to exit the loop
//
//
// // program 4
// //
// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0 ;
// var correctGuess = false;
// function getRandomNumber(upper){
//    return Math.floor(Math.random()* upper ) + 1;
// }
// do {
//   guess = prompt("Please guess the number from 1 to 10")
//   guessCount += 1;
//   if(randomNumber === parseInt(guess)){
//     correctGuess = true;
//   }
// }while(!correctGuess)
// document.write("<h1> You have guessed the number</h1>");
// document.write('It took you  '+guessCount+ ' tries to get the number '+ randomNumber);
//
// // basic number guessing game using do while loop....
//
// // program 5
//
// // var html = '';
// // for( var i = 1; i <= 1000 ; i += 1 ){
// //   html += '<div>' + i + '</div>'
// // }
// // document.write(html);
//
//
// // Three types of basic loops
// //while  //do while // for loop
//
//
// // The basic type of loop is for loop
// // For loop are common to work with arrays (which is a list of data)
// // We will be using the  for loop to tranverse through the list
//
//
// //program 6
//
// // Other way to exist or manage the loop
//
//
// // break statement with loops
// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0 ;
// var correctGuess = false;
// function getRandomNumber(upper){
//    return Math.floor(Math.random()* upper ) + 1;
// }
//
// while(true){
//   guess = prompt('I am guessing number from 1 to 10. What is it?');
//   guessCount += 1;
//   if(randomNumber === parseInt(guess)){
//     correctGuess = true;
//     break;
//   }
// }
// if(correctGuess){
//   document.write("<h1> You have guessed the number</h1>");
//   document.write('It took you  '+guessCount+ ' tries to get the number '+ randomNumber);
// }
//
//
// // Same program with else statement
//
//
//
// var guess;
// var guessCount = 0 ;
// var correctGuess = false;
// function getRandomNumber(upper){
//    return Math.floor(Math.random()* upper ) + 1;
// }
//
// while(true){
// var randomNumber = getRandomNumber(10);
//   guess = prompt('I am guessing number from 1 to 10. What is it?');
//   guessCount += 1;
//   if(randomNumber === parseInt(guess)){
//     correctGuess = true;
//     break;
//   }
// }
// if(correctGuess){
//   document.write("<h1> You have guessed the number</h1>");
//   document.write('It took you  '+guessCount+ ' tries to get the number '+ randomNumber);
// }else {
//   document.write('<h1>Sorry .you did not guess the number!</h1>');
// }



// program 7 //The  challenge code and its Working

// The refactor challenge

// Loops are one of the ways of saying DIR (Do not repeat yourself)

// Javascript function are another way of exerting DRY programming

// Process of improving a code is called as refactoring


var html = '';
var red ;
var green ;
var blue ;
var rgbColor;

for(var i = 1 ; i <= 10 ; i += 1){

  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue =  Math.floor(Math.random() * 256);

  rgbColor = 'rgb(' + red + ',' + green +','+ blue +')';
  html += '<div style ="background-color:' + rgbColor + '"></div>';
  //console.log(html)
}

document.write(html);

// Program eight
//
// var html = '';
// var rgbColor;
//
// function colorGen () {
//   var generateColor = Math.floor(Math.random() * 256 );
//   return generateColor;
// }
//
// function randomColor(){
//   return  'rgb(' + colorGen() + ',' + colorGen() + ',' + colorGen() + ')';
// }
//
// function print(message){
//   document.write(message);
// }
//
// for ( var i = 0; i < 10; i += 1) {
//   rgbColor = randomColor()
//   html += '<div style="background-color:' + rgbColor + '"> Hello </div>';
// }
//
// print(html);
// document.write(html);


// Program nine
//
// var html = '';
// var rgbColor;
//
//
// function colorGen () {
//   var generateColor = Math.floor(Math.random() * 256 );
//   return generateColor;
// }
//
// for ( var i = 0; i < 10; i += 1) {
//   rgbColor = 'rgb(' + colorGen() + ',' + colorGen() + ',' + colorGen() + ')';
//   html += '<div style="background-color:' + rgbColor + '"></div>';
// }
//   document.write(html);
