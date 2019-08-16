// Javascript loops , arrays and objects


// What we have learn so far


       //    Simple variables
       //
       //    Conditional statements
       //
       //    Strings
       //
       //  Numbers
       //
       // Booleans
       //
       // Functions

       //
       // Loops are used to run certain set of programs again
       // and again under several conditions are met .

// While loop in javascript


// While loop is very similar to if condition , the only  difference is the it
// will run as long as the condition evalutes to true

// function randomNumber(upper){
//   var x = Math.floor(Math.random()*upper);
//   return x
// }
//
// var counter = 0 ;
// while(counter < 10000 ){
//   counter += 1;
//   document.write("<h4> "+randomNumber(6)+" </h4>");
// }

// program 2
// A closer look at loop conditions



//Lets break this program down into multiple codes

// problem statement

/*1 Generate a random number from 1 to 10000. This number the number which computer
 need to guess.

 2 Enter a while loop - inside this loop the computer will "guess" a random
number . If the number the computer guesses matches the number generated at the
beginning  of the program , the loop ends , if not the loop continues
until the correct number is guessed. */

// Always learn to keep the varaible to the top of the file .

/* In case of while loop , the condition evaluated first , if true them
 the block of code is executed ..
 you always need a way to break out of loop ..
it should running, else will run infinitely
*/


// There should not be any endless loops in your code .


// var upper = 10000;
// var randomNumber = Math.floor(Math.random()*upper);
// var guess ;
// var numberOfAttempts = 0 ;
//
// while(guess !== randomNumber){
//   guess = Math.floor(Math.random() * upper);
//   numberOfAttempts += 1;
// }
//
// document.write("<p> The random number is "+ randomNumber +" <p>");
// document.write("<p> It takes "+numberOfAttempts+" attempts to guess the random number");



// Do while loop in JavaScript

// Do while loop will execute the the statement irrespective of condition

// When will you use the do while loop ?

//  Varibale i.e boolean varaible which holds the number , between true or false
//is called as flag


// program 3

// Check whether use entered number and random number get same and check whether the
// GuessCount
//
// var randomNumber = guessRandom(10);
// var guess ;
// var guessCount = 0 ;
// var correctGuess = false ;
//
// function guessRandom(upper){
//   return Math.floor(Math.random()* upper);
//
// }
//
// do {
//   guess = prompt("Please Enter any number between 1 to 10");
//   guessCount += 1
//   if(parseInt(guess) === randomNumber){
//     correctGuess = true;
//   }
// } while(!correctGuess)
//
//  document.write("<p> The random number you guess correctly was "+ randomNumber +" congrats <p>");
//  document.write("<p> It takes "+guessCount+" attempts to guess the random number");




//Program 4

// For loops

// For loops are used to execute a loop over a predefined number of times .
// For loops are also the common way to deal with array data.
// intialzation code run only once

//var i = 0 (this code runs only once), the condition is checked ,then the
// increment will happen , if the condition is failed the loop will exits

var html ="";

for(var i = 0 ; i < 10 ; i++ ){
  html += "<h4>" + i + "</h4>";
}
console.log(html);


document.write(html);

// program 5 (Existing loops)


// Break statement will exit out of loop .
// If the break statement encountered in loop , it exit quickly
// Break statement is very similar to return statement , the statement written
// after the break statement will not run


//
// var guessCount = 0 ;
// var guess;
// var randomNumber = guessRandomNumber(6) ;
// function guessRandomNumber(upper){
//   return Math.floor(Math.random()*upper) + 1
// }
//
// while(true){
//   guessCount ++;
//   guess = parseInt(prompt("Please Enter any number between one to six"));
//   if(guess === randomNumber ){
//     break;
//   }
// }
// document.write("<p> you have guessed the correct number "+ randomNumber)
// document.write("<p> It takes you "+guessCount+ " to guess it correctly");


// Using boolean as flag and and limiting guess to only 10 times .


// var guessCount = 0 ;
// var guess;
// var correctGuess = false;
// var randomNumber = guessRandomNumber(6) ;
// function guessRandomNumber(upper){
//   return Math.floor(Math.random()*upper) + 1
// }
//
// while(guessCount < 10){
//   guessCount ++;
//   guess = parseInt(prompt("Please Enter any number between one to six"));
//   if(guess === randomNumber ){
//     correctGuess = true;
//     break;
//   }
// }
//
// if(correctGuess) {
//   document.write("<p> you have guessed the correct number "+ randomNumber)
//   document.write("<p> It takes you "+guessCount+ " to guess it correctly");
// }
// else{
//   document.write("<p> You failed to guess in given 10 attemps</p>")
// }


// Program 6

// The refactor challenge
//
// Basically improving the code means ,
//
// 1) Improving the design to make it run faster
//
// 2) Commenting the code , to make it easy to read and understand
//
// 3) The most important aspect is to apply DRY principle to your programming
//
// 4) Loops are the one way of saying don't repeat yourself
//
// 5)  Javascript functions are another way which impressed DRY programming
//
// JAVASCRIPT IS NOTHING BUT THE REUSABLE container


// Refactoring and implementing dry principle to the code

//
// var html = " "
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<div style = "background-color:'+rgbColor+'"></div>';
//
//
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<div style = "background-color:'+rgbColor+'"></div>';
//
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<div style = "background-color:'+rgbColor+'"></div>';
//
//
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<div style = "background-color:'+rgbColor+'"></div>';
//
//
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<div style = "background-color:'+rgbColor+'"></div>';
//
//
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<div style = "background-color:'+rgbColor+'"></div>';
//
//
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<div style = "background-color:'+rgbColor+'"></div>';
//
//
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<div style = "background-color:'+rgbColor+'"></div>';
//
//
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<div style = "background-color:'+rgbColor+'"></div>';
//
//
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<div style = "background-color:'+rgbColor+'"></div>';
//
// document.write(html);

// program 7 (a)


// Refactoring the code to make it more efficient


//
// var htmla = " ";
// for(var i = 0 ; i < 10 ; i++ ){
//
//   var red = Math.floor(Math.random()*256);
//   var blue = Math.floor(Math.random()*256);
//   var green = Math.floor(Math.random()*256);
//   // rgb(255, 0, 0)
//   rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
//   console.log(rgbColor);
//   htmla+= '<div style = "background-color:'+rgbColor+'"></div>';
//
// }
//
// document.write(htmla);

// // program 7 (b)


// var htmlb = " ";
// for(var i = 0 ; i < 10 ; i++){
//   htmlb += '<div style = "background-color:'+generateColor()+'"></div>';
// }
// document.write(htmlb);
// function generateColor(){
// return 'rgb('+ Math.floor(Math.random()*256) +','+ Math.floor(Math.random()*256) +','+Math.floor(Math.random()*256) +')'
// }
// document.write(htmlb);

//Note :- you should declare the variable at the top of the script2
// If the varaible is declared inside the function , it should be declared at the top
// of function

// Function makes us allow to use more modular and reusable code .

// If you define a varaible inside a function , it will have scope within it .

// Program 8 (Other ways for refactoring the code)

// var html = '';
// var rgColor ;
//
//
// function randomRGB(){
//   return Math.floor(Math.random()*256);
// }
//
// function RandomColor(){
//    var color = 'rgb(';
//    color += randomRGB() + ',';
//    color += randomRGB() + ',';
//    color += randomRGB() + ',';
//    return color;
// }
//
// // function print(message){
// //   document.write(message);
// // }
//
// for(var i = 0 ; i < 10 ; i++){
//   rgbColor = RandomColor();
//   html += '<div style = "background-color:'+rgbColor+'"></div>';
// }
// //print(html);
// document.write(html);
