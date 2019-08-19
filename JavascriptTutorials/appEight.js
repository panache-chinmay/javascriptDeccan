function randomNumberGenerator(){

  var randomNumber = Math.floor(Math.random()*6) + 1;
    alert(randomNumber);
} // No semmicolon after the variable

randomNumberGenerator();
randomNumberGenerator();
randomNumberGenerator();
randomNumberGenerator();

//
// var alertRandom = function(){
//   var randomNumber = Math.floor(Math.random() * 6 ) + 1
//   alert(randomNumber);
// }
//
// alertRandom();
// alertRandom();
// A function calling another function -- (nested functions )

// / Function changing the flow of programme
// / Getting information from a functions


// / A function can basically return a value -->making function flexible

// Person returns with function value

// Functions basically returns true or false

// Return statement will only return values in true or false

// Accessing element to a webpage

// With conditional statement we can return true or false we can either return
//true or we can either return False

// Return statement will tell the javascript interpretorto immediately exit the function


// Getting information from a function


// / * program two

// function generateRandomNumber(){
//   var randomNumber = Math.round(Math.random()*6)+1;
//   return randomNumber;
// }
//
// alert(generateRandomNumber());
// console.log(generateRandomNumber());
// var dieRoll = generateRandomNumber();
// document.write("The rolled dice is "+dieRoll);


// / program three 3 --> Profram to check whether the email field is empty for not



// function isEmailEmpty(){
//   var emailFieid = document.getElementById('email');
//   if(emailFieid.value === ''){
//     return true;
//   }else{
//     return false;
//   }
// }
//
// var fieldTest = isEmailEmpty();
// if(fieldTest === true){
//   alert('Please provide your email address.')
// }


//Program  four 4


// Giving information to  the functions via parameter

// Javascript function accepts the information in form of arguments

// Naming the parameter follows the same naming convention as arguments

// For passing different values and getting different results



// Setting the upper limit in  generating the randomNumber functions

// Sending the argument to the function  console.log() // document.write() // alert()

// while calling a function you can pass multiple argument to a function which is stores as
// separate paramter in function which is then used as variable in the function .

// Another way to send lots of information to a fucntion


function generateRandomNumber(upper){
  var randomNumber = Math.floor(Math.random()*upper)+1
  return randomNumber;
}
//
// console.log(generateRandomNumber(9));
// console.log(generateRandomNumber(900));
// console.log(generateRandomNumber(9000));
// console.log(generateRandomNumber(90000));
// console.log(generateRandomNumber(900000));
// Finding the area of rectangle with multiple arguments


function areaCal(length,width,unit){
  var area = length * width +" "+ unit;
  return area;

}

// console.log(areaCal(5,6,"sqr ft."));

// / Variable scope ---> Very imp topic

// Separate scope for each function in javascript

// Each function in javascript acts as separate universe

// Varibles of different universe do not interact with each other

// Any variable outside the function is in global scope

// All functions can access the global scope variables and methods

// if global and function scope has same variable name  and if we remove  var Keyword
// in one of the scope , it affects global variable .

// you function should be independent of local global scope

// Always create var variable inside a function while creating a function


function greeting(){
  var person = 'chinmay'
  alert(person);
}
// var person = 'ninad';
// greeting();
// alert(person);
// greeting();

// Removing var --> changing the complete scope
function greeting(){
  person = 'chinmay'
  alert(person);
}
// var person = 'ninad';
// greeting();
// alert(person);
// greeting();

// Random generator challenge with functions and passing paramter as upper and lower
//limit

// If you want something in range //

// understand the calculation begins this

function generateRandomNumber(upper ,lower){
  // var randomNumber = Math.floor(Math.random()*(upper-lower+1))+lower;
  // return randomNumber;
  return Math.floor(Math.random()*(upper-lower+1))+lower;
//  return Math.floor(Math.random()*(upper)+lower)



}
//
// console.log(generateRandomNumber(9,5));
// console.log(generateRandomNumber(9,5));
// console.log(generateRandomNumber(9,5));
// console.log(generateRandomNumber(9,5));
console.log(generateRandomNumber(9,1));

// The random generator challenge two
// Passing string as argument

//isNaN('nine') // returns true
// isNaN(8) // returns false

// Javacript allows you to throw your own error


function generateRandomNumber(upper ,lower){
  // var randomNumber = Math.floor(Math.random()*(upper-lower+1))+lower;
  // return randomNumber;
  return Math.floor(Math.random()*(upper-lower+1))+lower;
//  return Math.floor(Math.random()*(upper)+lower)



}
//
// console.log(generateRandomNumber(9,5));
// console.log(generateRandomNumber(9,5));
// console.log(generateRandomNumber(9,5));
// console.log(generateRandomNumber(9,5));
console.log(generateRandomNumber("chinmay",1));


function generateRandomNumber(upper ,lower){
  // var randomNumber = Math.floor(Math.random()*(upper-lower+1))+lower;
  // return randomNumber;
  if(isNaN(upper) || isNaN(lower)){
    throw new Error("Both arguments should be numbers");
  }
  //return Math.floor(Math.random()*(upper-lower+1))+lower;
//  Math.floor(Math.random()*(upper)+lower)
console.log(Math.floor(Math.random()*(upper)+lower))







}
//
// console.log(generateRandomNumber(9,5));
// console.log(generateRandomNumber(9,5));
// console.log(generateRandomNumber(9,5));
// console.log(generateRandomNumber(9,5));
console.log(generateRandomNumber(9,1));
console.log(generateRandomNumber('Nine',1));
console.log(generateRandomNumber(9,'Ten'));
