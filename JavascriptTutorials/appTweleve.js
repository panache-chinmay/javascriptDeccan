// Objects in javascript
// Numbers , Strings , Booleans , Numbers is object or can be treated as   Objects

// propeties and method to the abject


//[1,2,3].length  ----> length

// key: value
//property:value

// Accessing the value of array using dot notation
// Acessing the value of array using

// Square brackets creates an array
// curly brackets creates an object

// Objects have properties and values
// Objects are one of the most important way to store Data



// Three ways to store values in javascript


// Key value

// Property value



//
//
// var  student = {
//   name:"chinmay",
//   age:28,
//   DOB:"7/11/1989"
//
// }
//
// console.log(student.name);
// console.log(student['name']);
//
//
// var student = {
//   name: "Dave"
// } // object

function print(message){
  document.write(message);
}
var person = {
  name:'Sarah',
  country:'US',
  age:35,
  treehouseStudent :true,
  skills:['Javasscript' ,'HTML','CSS']
};


// How to access values from the object


// alert(person['name']);
// alert(person.country);
//
// // updating the property of an object
//
// person.name = 'Ramesh';
// alert(person.name);
//
// // adding new property to an object
//
// person.house = '35';
// alert(person.house)

// Object helps to keep silimar and relevant data together (holds relative data together)


//functions can also return objects

//Strings written on javascript is just another file  //

var message = '<p> My name is '+ person.name +'</p>'
message += '<p> I live in '+ person.country +'</p>'
person.name = "Nadim"
message += '<p> I wish my name was  '+ person.name +'</p>'
message += '<p> My age is  '+ person.age +'</p>'
message += '<p>I have  '+ person.skills.length +' skills '
message += person.skills.join(",")+'</p>'
print(message);

// Working with object property is not as difficult as working with variables

// Lots of similarties for working with arrays and objects

// A special type of object available in loop is called as  for in loop

// Javascript object are very similar to keys

// Array stores the value in specific list

// Console .log helps you to add strings with,separation


// TO ACCESS THE PROPERTY VALUES USING FOR EACH LOOP -Use []


for(prop in person){
  console.log(prop ,':' ,person["country"]);
}

// Mixing and matching arrays and objects


// Objects helps to use clear name to identify the data

// converting array to an object in ARRAY for question answer game

// Looping thorugh the array we will capture every object and the we will capture
//every property of object .

var correctAnswers = 0;
var question;
var answer ;
var response ;
var html ;
var correct = [];
var wrong =[];
var questionAnswers = [
  {question:"Capital of India ?",answer:'delhi'},
  {question:"Capital of Maharashtra ?",answer:'mumbai'},
  {question:"Capital of Karnataka ?",answer:'banglore'},
  {question:"Capital of Rajashtan ?",answer:'jaipur'},
  {question:"Capital of Goa ?",answer:'panji'}
]

// Its good programming practice to include variable at top of script
function startQuiz(questionAnswers){
  for(var i = 0 ; i < questionAnswers.length ; i++ ){
    console.log("correct");
    var answers = prompt(questionAnswers[i].question);
    if(answers.toLowerCase() === questionAnswers[i].answer )
      correctAnswers += 1;
  }
  var html = "you got " + correctAnswers+ " questions correct";
  print(html);
}
startQuiz(questionAnswers);


// Restarting with jason

//  Javascript object notation


// JASON is the most ..

// It is most commonly way to exchange between server and web browser

// Using ajax a broswer can asked for the latest photo available on website


// JASON can be easily converted to javascript object which can be then easily
// displayed using javascript object


// Online tool to imporve the jason
