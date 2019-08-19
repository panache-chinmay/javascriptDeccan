//
// // List of few array method .
//
// // .join()  methods takes in array and return String of all items in array
//
//
// var daysInweek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// var daysString = daysInweek.join(",")
// console.log(daysString);
//
// // .concat()  to add new lists to the array
//
//
// var currentStudents = ['Chinmay','Amol','Jack']
// var newStudents = ['Harikesh','Jaydeep','Rakesh']
// var allStundents = currentStudents.concat(newStudents);
// console.log(allStundents);
// console.log(newStudents); // Does not change the actual array
// console.log(currentStudents) // Does not change the actual array
//
// // Index of method to return actual  index of value.
// var fruits = ['Apple','Orange','GrapeFruit'];
// var position = fruits.indexOf('Orange');
// console.log(position);
//
// //If the item is not in the list it returns the value of '-1'
// // This  return value of '-1'is very handy to determine whether
// //the item is available in list  or not
//
// // Creating a search engine in Grocery store and displaying the appropriate messages
// // and finally quitting the search program .
//
// // The only way to exit a loop is with break statement

// Program One

// var inStockFruits  = ["apple","mango","grapes","chiku","papita","banana"];
// var search ;
//
// function print(message) {
//   document.write('<p>'+ message +'</p>');
// }
// while(true){
//     search = prompt("Please enter 'list' to few all items available in stock, 'quit' to exit the search , or item to be searched." )
//     search = search.toLowerCase();
//     console.log(search);
//     if(search === 'quit'){
//       break;
//     }else if(search === 'list'){
//       print(inStockFruits.join(","));
//     } else {
//       if(inStockFruits.indexOf(search) > -1){
//         print(search + " is available in stock");
//       } else {
//         print(search + " not available in stock");
//       }
//     }
// }


// Two dimensional array

// An array can contains numbers , strings , character and Boolean values

// An array can contain another array .ie the array is called as two dimensional arrays


/*                      Tests
                    Test1    Test2   Test3   Test4

students  A        10         20      30      40    ----> // array1 inside grades array

students  B        50         60      70      40   -----> // array2 inside grades array

students  C        50         60      70      40 --------> // array3 inside grades array

students  D        50         60      70      40 --------> // array4 inside grades array

*/

//
// var grades = [
// [10      , 20  ,    30  ,     40 ],
// [100      , 200  ,    300  ,     400 ],
// [103      , 204  ,    305  ,     45 ],
// [104      , 205  ,    306  ,     406 ]
//
// ];
//
// console.log(grades[0][3])
//
// var playList = [
//     ['Sanam re','Arjit Singh'],
//     ['Sanam re 2','Arjit Singh 2'],
//     ['Sanam re 3','Arjit Singh 3'],
//     ['Sanam re 4','Arjit Singh 4'],
//     ['Sanam re 5','Arjit Singh 5'],
// ];

function print(message){
  //  document.write(message);

  var topDiv = document.getElementById('top');
  topDiv.innerHTML = message;
}

// function playSongs(songs){
//
//   var listHtml = "<ol>";
//
//   for(var i = 0 ;i < playList.length ;i += 1){
//
//     listHtml += "<li> "+ songs[i][0]+" is song by "+songs[i][1] +" </li>";
//
//   }
//     listHtml += "</ol>"
//     print(listHtml);
// }
// playSongs(playList);


// Building a quiz challenge part one .

var correctAnswers = 0;
var question;
var answer ;
var response ;
var html ;
var correct = [];
var wrong =[];
var questionAnswers = [
  ["Capital of India ?", 'delhi'],
  ["Capital of Maharashtra ?",'mumbai'],
  ["Capital of Karnataka ?",'banglore'],
  ["Capital of Rajashtan ?",'jaipur']
]

// Its good programming practice to include variable at top of script


function startQuiz(questionAnswers){

  for(var i = 0 ; i < questionAnswers.length ; i++ ){
    console.log("correct");
    var answers = prompt(questionAnswers[i][0]);
    if(answers.toLowerCase() === questionAnswers[i][1] )
      correctAnswers += 1;
  }
  var html = "you got " + correctAnswers+ " questions correct";
  print(html);
}
startQuiz(questionAnswers);


// We need to two arrays which will hold correctly answered questions and

// incorrectly answered questions

// document.write is not highly used in javascript

// document.getElementById('id') will return very special thing i.e object

// which represents particular spot on html page called as node

// ALL TIME CREATE STRING WHICH IS SIMILAR TO YOUR HTML AND CSS
