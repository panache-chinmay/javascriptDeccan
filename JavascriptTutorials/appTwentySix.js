console.log("Hoisting concept in javscript");
// program one

calulateAge(1989);
function calulateAge(year){
  return 2019 - year ;
}

// Hoisting is the javascript default behaviour of moving declartions the the top

// In Hoisting function declartion is stored in variable object
//In creation phase of execution context declaration , the function decalration is stored in varaible object.

// If variables are related with the execution context,
// it should know where its data are stored and how to get them.
// This mechanism is called a variable object


// program Two

// Some thing the round bracket will have maximum precedence

// Hoisting with function expression

// This is not work

// retirement(1990);
// var retirement = function(year){
//   console.log(65 - (calulateAge(year)))
// }

// appTwentySix.js:28 Uncaught TypeError: retirement is not a function
//     at appTwentySix.js:28

// Program 3

// This will work

// Hositing will only work with function declaration and not with function expression


// Program 4
//Hoisting with variables

// age = 28;
// console.log(age);
// var age;

// outpur is 28


//
// console.log(age);
// var age;
// age = 28;

// output is undefined

// console.log(age);
// var age = 28;

// output is undefined
var age = 23 ;
function foo(){
  var age = 65;
  console.log(age)
}
foo();
console.log(age);

// The most important usage of hoisting is function declaration
