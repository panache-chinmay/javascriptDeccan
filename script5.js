// // Tracking multiple items with arrays
// //
// // Array is basically called as data struture , it is basically one way of storing
// // information
// //
// // The problem with one varaible is that , it only holds one value
// //
// // Considering the example of shooping cart
// //
// // If you add 100 items in shopping list , you need to create 100 variables ,
// // which is not feasible
//
//
// // Array can store another array , string , int .
//
// // Syntax to create array .
//
// // The values inside the array can be , separted
//
// Arrays of String
//
//
// var arrayName = [];
//
// var myShopping  = ["Ameya","Sandip","Rohit","Raghav","Raman"];
// //
// // Arrays of Numbers
//
// var myRollNumbers = [23,43,54,56,78];
//
// //Arrays of Mixed data types
//
// var myNameAndRollNumber  = ["Ameya",1,"1",2,33];
// //
// // // Array within array
// //
// // var ArraysWithinArray = [1,2,3,4,5];
//
// // [] brackets indicate its a array literal
//
// // Breaking the array over multiple lines
//
//
// var shoppingList = [
//   'carrots',
//   'milks',
//   'eggs'
// ];

// With array you can make list of sections and list videos

// program 2 (How to access various elements within array)
// Array is the list of multiple values .

//In case varaible , it is easy as the variable name acts as a place holder , inside array
// The first element from the array starts from index 0

// Printing Element of array

// console.log(shoppingList[0]);
// console.log(shoppingList[1]);
// console.log(shoppingList[2]);
// //  If the element is not defined at particular index , it will come as 'undefined'
// console.log(shoppingList[3]);


// program 3 ..

// Adding items to the array

// Adding elements to the Array
// Why it is required to add element inside array

// Suppose for shopping card , you can define a array for shoppig cart ,
// firstly the shopping cart will have Zero items and gradually after adding we need to
// add cart to shopping list .


// Change on Mozilla Developer network for array Documentation.
// Methods are basically the actions we can perform on array .


// Modulars , librabies and plugin .. which are already developed in js and can be used
// to benefit

var  list = ["Javascript" ,"HTML","CSS"];

function printList(list){
  var listHTML = '<ul>';
  for(var i = 0 ; i < list.length ; i++){
    listHTML += '<li>' + list[i] + '</li>';
  }

  listHTML += '</ul>';
  console.log(listHTML)
  //print(listHTML)
  document.write(listHTML)
}

// function print(html){
//   document.write(html)
// }

printList(list)


// Add items to the end of array
// Adding items to the beginning of array
// Printing the item to array.

// Please let me know the return type of push() and unshift method();

//push() and unshift returns the length of array

//
// var playList = [];
// playList.push('I Did it My way');
// playList.push('I Did it My way2','I Did it My way3');
//
// playList.unshift('First I did that way');
// playList.unshift('Second I did that way','Third i did it that way');



// Another way of adding element to the array ...

// playList[playList.length] = "New with another"
// //printList(playList);
//
//
// // Updating value of Array via index
//
// //printList(playList);
//playList[2] = "2" // Are arrays mutable ?
//
// console.log(playList)

// program 4
// Removing items from array

// pop() removes last item as well as returns last item of array
// shift() removes the first element from array and return the same .



//pop() and shift are often used to create a method called queue  , or a list
// of items which falls into the list of first in and first out .

// Which is often called as Firefox

// console is the smart way to test pop and shift methods.

// var numbers = [1,2,3,4,5,6,7]
//
// console.log(numbers.length); // returns the last element of array
// //Adding last
// numbers.push(8); // return length
// console.log(numbers)
// // Adding first
// numbers.unshift(0) // returns Length
//
// console.log(numbers);
// // Removing last
// numbers.pop(); // returns last element if array
// // Removing first
// numbers.shift(); // returns the first element of array

// Program 5 Using for loops with Arrays

//Because the arrays can hold hold limitless numbers of item in a single variable
// They are the most used data struture

// Where arrays can be used ..

// 1) To store the item in do to list
//
// 2) To store the name of all variables in data list
//
// 3) To track the questions in the list
//
// 4) To store information for your last 20 tweets
//
// 5) To stores answers for the quizs


// To iterate through array we use for loop

// program 5

var names = ['Chinmay','Deshpande','Sammer','Sheikh','chinmayDeshpabde'];
// Without using length property
// console.log(name[1]);
// alert(name[2]);
  for (var i = 0 ; i < 4; i += 1){
    console.log(names[i]);
  }
// with using length property
for(var i = 0 ; i < names.length ; i += 1){
  console.log(names[i]);
}

// Playlist Solutions and printing it in ordered list

// Loops basically repeat a set of action , until the certain condition is met .




// Program 5 b

//   var playlist = [
//     'I did play a some',
//     'I did play a some1',
//     'I did play a some2',
//     'I did play a some3',
//     'I did play a some4'
//   ]
//
//   function print(message){
//     document.write(message);
//   }
//
//   function printList(list){
//     var listHTML = "<ol>";
//     for(var i = 0 ; i < list.length ; i++){
//       listHTML += "<li>"+list[i] + "</li>";
//     }
//     listHTML += "</ol>"
//     print(listHTML);
//   }
// printList(playlist);

// Some useful methods in array

// program 7

//array.join();
// join method of array , combines all the element of array into single string with , or :
// what is passed to array.

// You can also pass a string containing,and the space
                            // parameter                  // return type
// 1) array.concat();       array

// 2) array.join() ;        character to separate element  // single string combine of elements

// 3) array.indexof()       element                        // element index if avavilable
                                                           //  else  -1


  // var namey = ["name" , "game","same","fame"];
  // var oneString = namey.join(",");
  // console.log(oneString);
  //
  // var  name2 = ["name" , "game","same","fame"];
  // var name3 = ["na","ma","sa","ra","ga","fa"];
  // var oneString2 = name2.concat(name3);
  // console.log(oneString2);
  //
  // var name4y = ["name","name2","name4"];
  // console.log(name4y.indexOf("name"));
  // console.log(name4y.indexOf("chinmay"));

  // concat will not change either of the two arrays

  // Search Engine program 7b

  //flowers.indexOf(search) > -1

  // indexOf method of array  will return -1  if no element is present ,
  // else it will return 1

// var flowers = ["rose","lily","jasmine","lotus","marigold","sunflower","sambac","tulip"];
// var search ;
//
// while(true){
//   search = prompt("Please type the 'name' of flower ,'Please type quit to exit','please type 'list' to view available flowers'");
//   search = search.toLowerCase();
//   if(search === 'quit'){
//     break;
//   }
//   else if (search === 'list'){
//     document.write("<p> "+flowers.join(",") +" </p>");
//     break;
//   }
//   else {
//       if(flowers.indexOf(search) > -1){
//         document.write("<p>"+search+" is available in stock </p>");
//         break;
//       }
//       else{
//         document.write("<p>"+search+" is not available in stock </p>");
//         break;
//       }
//   }
// }


// Program 8

// More complex types of array

// Arrays can basically hold booleans , strings and other values,
// Basically they can hold any types of values


// you can also placed array within an array .


// Consider two dimensional array as a list containing another list
// Consider it as array consisting of another array


// Considering the array as spreadsheet ...
// Each item  represnts one item in an array
// Each row represents  one arrays



// var grades = [
//   [80,90,100,95],
//   [75,95,85,100],
//   [60,80,77,90]
// ];


// grades

// index     value

//0         [80 , 90 ,100,95] [grades][0] // for the first student

//1         [75 ,95 ,85 , 100] // for second student

//2        [60 ,80 ,77 , 90]  // For third student


// Multi-dimensional array ...
// Array within arrays



// This is two dimensional value for arrays of numbers

// you can have two dimensional values for array of strings

// You can have 2 dimensional values for arrays of arrays also

// you can have 2 dimensional array for arrays of strings

// Function name and parameter name must be accurately , what are you indented to do

// To access the element within the array , we need to access arrayName and index value.

// print a program which will access song and its author name


// var songs = [
//   ["songOne" ,"AuthorOne"],
//   ["songTwo","AuthorTwo"],
//   ["songThree","AuthorThree"]
// ];
//
// function printSongList(){
//   var html = "<ol>"
//   for(var i = 0 ; i < songs.length ; i++){
//     html += "<li> " + songs[i][0] + ' by ' + songs[i][1];
//   }
//   html += "</ol>"
//   print(html);
// }
//
// function print(list){
//   document.write("<p> "+list+"</p>")
// }
//
// printSongList();


// program 9
// random challenges

//
// var correctAnswerQuestions = [];
// var incorrectAnswerQuestions = [];
// var correctAnswer = 0;
// var questions = [
//   ["what is your name " ,"chinmay"],
//   ["what is your surname","deshpande"],
//   ["what is your education","be"],
//   ["what is your rollnumber","7"]
// ]
//
// var answerOne;
// for(var i = 0 ; i < questions.length ; i++){
//     answerOne = prompt(questions[i][0]);
//     console.log(answerOne);
//     if(answerOne === questions[i][1]){
//       correctAnswer += 1;
//       correctAnswerQuestions.push(questions[i][0]);
//     }
//     else {
//       incorrectAnswerQuestions.push(questions[i][0]);
//     }
// }
// document.write("<p> The total number of correct anwers "+ correctAnswer +"</p>");
// document.write("The number of correct answers");
// for( var k = 0 ; k < correctAnswerQuestions.length ; k++){
//     document.write("<p>"+ correctAnswerQuestions[k] +"</p>");
//   }
//   document.write("<p> The number of incorrect answers </p>");
//
//   if(incorrectAnswerQuestions.length > 0){
//   for( var y = 0 ; y < incorrectAnswerQuestions.length ; y++){
//     document.write("<p>"+ incorrectAnswerQuestions[y]+" </p>");
//   }
//  }
//
//  else {
//     document.write("you got it all correct");
//  }


//Generic solutions
//
// var questions = [
//   ['How are states are there in united states' , 50],
//   ['How many continents are there ?' ,7],
//   ['How many legs does an insect have?',6]
// ];
//
// var  correctAnswers = 0;
// var question;
// var answer;
// var response;
// var html;
//
// function print(message){
//   //document.write(message);
//
//   var outPut = document.getElementById('chinmay');
//   // its basically holding an object , which represents a particular spot on html page ,
//   // and we basically called it as node ,which have one property .
//
//   // it has one property i.e innerHTML
//
//   // using inner HTML we can change the content of that node , means i,e div
//
// }
//
// for(var i = 0 ; i < questions.length ; i+= 1){
//   question = questions[i][0];
//   answer = questions[i][1];
//   response = parseInt(prompt(question));
//
//   if(response === answer){
//      correctAnswers += 1
//   }
// }

// document.write was the oldest way of writing to the DOM

// Now there are many ways for updating ,modifying ,deleting , html content to DOM via javascript

// DOM is the broswer module to see, display and view the content of htmla

// creating a new function which uses html as a parameters


// Refactoring the code ,
// instead of writing loops multiple tyms , we can create fuction and pass array


//------------------------------------------------------------------------
// PART CHALLENGE 3 Remaning , please check for yourself
//-----------------------------------------------------------------------
