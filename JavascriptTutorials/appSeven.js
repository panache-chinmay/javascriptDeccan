

// Generating different numbers in javascript

// * program One

// var name = "Chinmay";
// console.log(name.length);
//
// var age2 = 23.4;
// var age = 28.8;
// console.log(Math.round(age));
// console.log(Math.round(age2));
//
// console.log(Math.floor(23.23));
// console.log(Math.ceil(24.45));
// console.log(Math.random());
// // Math.random will give the number between 0 and 1
// // To get the number between 1 and 6
// console.log(Math.floor(Math.random()*6)+1);
// var diceRoll =  Math.floor(Math.random()*6)+1;
// alert('you have rolled a '+diceRoll);

// The random Challenge

// topNumber --> 100
// bottomNumber --> 25


* program two
var inputTwo = prompt("Please type a Bottom number");
var input = prompt("Please type a Top number");
var topNumber = parseInt(input);
var bottomNumber = parseInt(inputTwo)
//var randomNumber = Math.floor(Math.random()*topNumber)+1;
var randomNumber = Math.floor(Math.random()*(topNumber-bottomNumber+1))+ bottomNumber;
// var message = "<p>" + randomNumber + " is a number between 1 and "+ topNumber +".<p>";
var message = "<p>" + randomNumber + " is a number between " +bottomNumber +" and "+ topNumber +".<p>";

document.write(message);


//*Program Three

var userAnswer = prompt('Which is the programming language name after gem?');
if(userAnswer.toUpperCase() === 'RUBY'){
  document.write('That\'s correct!');
}
else {
  document.write('That\'s wrong!')
}


console.log(a);
console.log('apple' < 'bear')
console.log(2 > 4)
console.log(100 >= 100)
console.log(3 < 2);
console.log(-12 < 0)
console.log('apple' < '12');
console.log(3 === '3');
console.log(3 == 3);
console.log('' == 0 ); // true
console.log(''=== 0); // false
console.log('10'!== 10);//true
console.log(-159 !== -159)


// * program four

//Javascript is a case sensitive language

var randomNumber = Math.floor(Math.random() * 10) + 1;
var guess = prompt('I am thinikg of a number between 1 to 6 . What is it?');
if(parseInt(guess) === randomNumber ){
  document.write('<p> You guess the number !</p>');
}else {
  document.write('<p>Sorry.The number was '+randomNumber+'</p>');
}

// same program using boolean variable


// * program 5

var correctGuess = false ;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 to 6. What is it ?')
if(parseInt(guess) === randomNumber){
  correctGuess = true
}
if(correctGuess === true){
    document.write('<p> You guess the number !</p>');
}
else {
  document.write('<p>Sorry.The number was '+randomNumber+'</p>');
}

// Same program using if else statements

//program 6

/*  The random  number guessing game  generates a number between 1 and 6
and gives playes two attemot to guess anumber */

// var correctGuess = false ;
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt('I am thinking of a number between 1 to 6. What is it ?')
// if(parseInt(guess) === randomNumber){
//   correctGuess = true
// }

    /* Test */
// else if(guess < randomNumber){
//     guess = prompt('Please try again. The number I am thinking of is more than '+ guess)
//     if(parseInt(guess) === randomNumber){
//       correctGuess = true
//     }
// }
// else if(guess > randomNumber){
//   guess = prompt('Please try again. The number I am thinking of is less than '+ guess)
//   if(parseInt(guess) === randomNumber){
//       correctGuess = true
//   }
// }
// if(correctGuess === true){
//     document.write('<p> You guess the number !</p>');
// }
// else {
//   document.write('<p>Sorry.The number was '+randomNumber+'</p>');
// }


// program 7
//
// var correctAnswer = 0;
//
// var answer1 = prompt("Name a programming language which is also a name of a gem?");
// if(answer1.toUpperCase() === 'RUBY'){
//     correctAnswer += 1;
//     console.log(correctAnswer)
// }
// var answer2 = prompt("Name a programming language which is also a name of snake?")
// if(answer2.toUpperCase() === 'PYTHON'){
//     correctAnswer += 1;
//     console.log(correctAnswer)
// }
// var answer3 = prompt("Name a programming language which is used to style the webpage?")
// if(answer3.toUpperCase() === 'CSS'){
//     correctAnswer += 1;
//     console.log(correctAnswer)
// }
// var answer4 = prompt("Name a programming language which is used to add struture to  the webpage?")
// if(answer4.toUpperCase() === 'HTML'){
//     correctAnswer += 1;
//     console.log(correctAnswer)
// }
// var answer5 = prompt("Name a programming language which is used to add interactivity to  the webpage?")
// if(answer5.toUpperCase() === 'JAVASCRIPT'){
//     correctAnswer += 1;
//     console.log(correctAnswer)
// }
// // output results
// document.write("</p> you got "+ correctAnswer +" out of 5 questions correct.</p>")
// //output rank
//
// if(correctAnswer === 5){
//   document.write("<p><strong> you earned a gold crown <strong></p>");
// }else if (correctAnswer >= 3){
//     document.write("<p><strong> you earned a silver crown <strong></p>");
// }else if (correctAnswer >= 1){
//   document.write("<p><strong> you earned a bronze crown <strong></p>");
// }else{
//   document.write("No crown for you .you need to study more");
// }
