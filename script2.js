//
// // Working with number
//
// // program One
// var numberOfSecondsInMinute = 60;
// var numberOfMinutesInHour = 60 ;
// var numberOfHoursInDays = 24;
// var numberOfDaysInWeek = 7;
// var numberOfDaysInYear = 365;
// var numberofDaysInMonth = 31;
// var numberOfWeeksInYears = 52;
// var secondsPerDay = numberOfSecondsInMinute * numberOfMinutesInHour * numberOfHoursInDays;
// document.write('There are '+secondsPerDay+' seconds in a day');

// // Program 2
// // prompt() returns us the string varaible.
//
// var htmlBadges = prompt("Please Enter the Number of html Badges you received ? ");
// var cssBadges = prompt ("Please Enter the Number of css Badges you received");
// var totalBadges = htmlBadges+cssBadges;
// document.write("There are total "+ totalBadges + " you had got");
//
// // program 3
// // Using parseInt() to convert string to integer and correcting the program
//
// var htmlBadges = prompt("Please Enter the Number of html Badges you received ? ");
// var cssBadges = prompt ("Please Enter the Number of css Badges you received");
// var totalBadges = parseInt(htmlBadges) + parseInt(cssBadges);
// document.write("There are total "+ totalBadges + "Badges you had got");
//
// // Program 4
//
// // The Mad libs challenge presented
//
// // Let the player know how many questios are remained to be answer.
//
// var questions = 3;
// var questiosLeft = '[' + questions + 'questionsLeft]';
// var adjective = prompt("Please Enter the adjective"+ questiosLeft);
// questions --;
// questiosLeft = '[' + questions + 'questionsLeft]';
// var verb = prompt("Please Enter the verb"+ questiosLeft);
// questions --;
// questiosLeft = '[' + questions + 'questionsLeft]';
// var noun = prompt("Please Enter the noun "+ questiosLeft);
// var sentence = "<h2> There was a "+adjective +" programmer";
// sentence += " who wanted to use javascript to "+verb+ " the ";
// sentence += noun;
// document.write(sentence);
//
//
// //program statement 5
// //Generating Random number using javascript
//
// Use Math.object to generate the random number .
//
// Math.random returns the number between 0 and 1
//
// Math.floor() and Math.ceil provides the decimal value to integer when you
// provides values to this methods
//
// Math.floor() rounds the value of to the lower side.
//
// Math.ceil() rounds the value to the upper side .
//
//
// //Program 5
//
// //Rolling the dice
//
// var x = Math.floor(Math.random() * 6) + 1;
// alert("you have rolled the number " + x);
//
//
// //Program 7
//
// //The random number challenge ---
//
//
// //Generate a random number till the value input  by user.
// var userInput = parseInt(prompt("please Enter a value ?"));
// var x = Math.floor(Math.random() * userInput) + 1;
// alert("you have rolled the number " + x);
// //Generate a random number till between two values generate by user.
//
// // program 8
//
// var userInput = parseInt(prompt("please Enter a starting value?"));
// var userInput2 = parseInt(prompt("please Enter a ending value?"));
// var randomNumber = Math.floor(Math.random() * (userInput2 - userInput+1)) + userInput;
// alert("you have rolled the number " + randomNumber);
//
// //program 9


// Make one program with if statement , one with else statement and
// and came the case of uppercase.


  // var answer = prompt('What programming language is the name of your gem?');
  //   if(answer.toUpperCase() === 'RUBY'){
  //       document.write("<p> That's right </p>");
  //   } else {
  //      document.write("<p> Sorry , that's wrong .</p>")
  //   }


  //program 10

  // Every number comes before alphabets , hence 90 < b will be true .

  if("90" < "b"){
    console.log("true");
  }

  if("3" == 3){
    console.log("true");
  }

  if("3" === 3){
    console.log("true");
  }
  else {
    console.log(false)
  }

  if("" == 0){
    console.log(true);
  }

  if("" === 0){
    console.log(true);
  }

  else {
    console.log(false);
  }


// If you compare a number with a string with numeric literal, == allows that,
// but === doesn't allow that, because it not only checks the value but also
// type of two variable,if two variables are not of the same type "===" return
// false, while "==" return true.


// program 11

// console.log(a);
// console.log('apple' < 'bear')
// console.log(2 > 4)
// console.log(100 >= 100)
// console.log(3 < 2);
// console.log(-12 < 0)
// console.log('apple' < '12');
// console.log(3 === '3');
// console.log(3 == 3);
// console.log('' == 0 ); // true
// console.log(''=== 0); // false
// console.log('10'!== 10);//true
// console.log(-159 !== -159)
