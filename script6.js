// Tracking data using objects


  // The object literal


  /*
    1) Javascript is basically considered as object oriented or object based programming
   language

   2) Basically everthing in javascript functions ,arrays ,booleans , strings are either
   object or can be treated as object in javascript

   3) A simple way to think of an object , objects basically have properties and
   values

   4) properties are something that belongs to an object and methods are something
   that can be done to an object.

   5) We have seen many examples of object till now for example  array

   [1,2,3] --This array is an object which have property length

   6) objects also have methods  which are used to do somethin in array or to

   do with items in the array.(for example push method add item to the array)

   7) You can create you own object,that is a part of advanced JavaScript.

   8) In this tutorial we are using object to basically store data

   (Till now we had studied only two way to store values in variables and in arrays)

    var name = "Dave";
    var grades  = [80,90,78,89]

 9) Javscript object allows you to store data in the form

    key:value
    property:value

 keys are properties are like variable name and 'value' like the value of that variable,
so you can called object as a single item that holds multiple values

var   student = { }; // this are object literals ---->

Note :- curly braces creates an object and [] creates an array.

*/

// program 1 a)

var student = {
  name:"chinmay",
  age:28
}

/* 1)  Please note the key is not in quotes , key are same as variables so
so the rules applied to defined variable name should be same as defining  keys inspect
objects

2) Values can be another String , Boolean , Number , Array or may be another object.

3) As we separate items in array by ',' we can similary separate properties and their
values in javascript with ''

4) Spaces are optional in objects but it good idea to place it on separate lines
to make it more readable

5) In addtion you should intend each line inside a object (2 or 4 spaces)

6) Indentation helps you to see that those lines belong to the object

7) Space after the colon ':' between properties and values is a personal preference
*/

//program 1 b)

// var student = {name:"chinmay",age:28}
//
//
// // creating a object literal to know basic information about a person.
//
// // program 1 c)
//
var person = {
  name: 'Sarah',
  country: 'US',
  age:35,
  treehouseStudent:true,
  skills:[ 'Javascript','HTML',]
}


// program 2 a)

 //Accessing object properties



/*
note:- object allows you to store multiple values in one single variable.

Array uses index to access the array item , while the object uses key to access the object item

1)
var students = ['Diane','Alicia','Frankie','Sam'];
alert(students[0]);

2) Two different ways to access values inside the object in JavaScript.

a) objectName.propertyName (Dot notation)
or
b)objectName["propertyName"] (Bracket notation)

3) . notation is very common, as we can update the values of any propertyName

4) using . notation , we can also generate new property


*/

// program 2 a)

// var person = {
//   name: 'Sarah',
//   country: 'US',
//   age:35,
//   treehouseStudent:true,
//   skills:[ 'Javascript','HTML','CSS']
// }

//Accessing value via dot notation
// console.log(person.name);
//
// // Accessing value via bracket notation
// console.log(person['name']);
//
// // Updating value of existing property 'name'.
// person.name = 'Deo';
//
// // Creating new property for person object.
// person.color = "Wheatish";

/*
 1) Think of object as a package of variables in form of properties
inside the object

2) It helps to keep the relevant data into a easily accessible unit,which
basically simplifies data handling .

3)You can pass object as an argument to any function and return object from a
function (When you need to return a large set of data use object )

4)Return statement allows you to return only one value.

*/


// program 2 b


// var person2 = {
//   name: 'Sarah',
//   country: 'US',
//   age:35,
//   treehouseStudent:true,
//   skills:[ 'Javascript','HTML','CSS']
// };
//
// function print(message2){
//   var div = document.getElementById('chinmay');
//   div.innerHTML = message2;
// }
//
// console.log(person2.name);
// var message = '<p> Hello , My name is '+ person2.name +' </p>';
//     message += '<p> I live in the ' + person2.country + ' </p>';
//     person2.name = 'Chinmay';
//     message += '<p> But , I wish my name was '+ person2.name +' </p>';
//     person2.age += 1;
//     message += '<p> My age is now '+ person2.age +' </p>';
//     message += '<p> I have '+person2.skills.length+' skills';
//     message += person2.skills.join(', ')+ '</p>';
//
// print(message);


//program 3
//  Using 'for in' to loop through object's properties


/*
  1) There are  lot of similarities between  arrays and objects ,
   Arrays basically stores those values  in specific numeric positions in list

  2) Objects stores multiple values which can be acessed using key or property name.

  3) Because the array value have numeric index , a for loop provide easy way to
access each item in array.

 4) you can access each value in object using a special type of object called as 'for in loop'

5) It basically loops thorugh each 'key' or 'property' name in the  object.

// Basic syntax

// To print keys

for( var key in objectName){
    // do something
    console.log(key);
}

// To print values of properties.


for( var key in objectName){
    // do something
    console.log(objectName[key]);
}


6) for ,var and in are keyword, key name can be anything you like , object name is name of object.

7)This basically gives us the access to key name , you can use square bracket notation,
yo access the value. Infact the only way to access the value of properties object vai 'for in' loops
is via bracket notation

8) With dot notation it will look for exact property name as it cannot substitue like brackey notation.

  TO ACCESS THE VALUE WE WANT TO USE SQUARE BRACKET NOTATION IN CASE OF FOR IN LOOP

*/


//
// var person2 = {
//     name : 'Sarah',
//     country:'US',
//     age:35,
//     treehouseStudent:true,
//     skills:['JAVASCRIPT','HTML','CSS']
// }
//
// for(prop in person2){
//  //console.log(prop , ': ',person2[prop])
// //  console.log(prop , ': ',person2["skills"]);
// }



// program 4

// Mixing and matching arrays and objects

/*

  1) Arrays are great , they are easy way to create ordered level development

  2) Objects are also great , they also provide a easy way to write structured data
  and  can be access using property , name and value .

 */


//  var questions = [
//     {questions: 'How Many States are in United States?',answer:50},
//     {questions: 'How Many Continents are there?',answer:7},
//     {questions: 'How Many Legs does the insect have ?',answer:6}
//  ];
//
// var correctAnswers = 0 ;
// var questions;
// var answer ;
// var response;
//
// function print(message){
//   document.write(message);
// }
//
// for(var i = 0 ; i < questions.length ; i += 1){
//   questions = questions[i].question;
//   answer = questions[i].answer;
//   response = prompt(question);
//   response = parseInt(response)
//   if( respone === answer){
//     correctAnswers += 1
//   }
//
// }
//
// html = "You got " + correctAnswers + "question(s) right.";
// print(html);


// program 5
// javascript object notation

/*
  1)Javascript object provides you the structured way to store the data.

  2)Object stores most of the information at one place and store them in form of key and value
  for easy access

  3) They are so structured that they become one of the model for data exchange on web called as
  jason.

  4) JASON is commonly used wih the technology called AJAX which is commonly used to exchange
  information between server side and web browser.

  5) For example using Ajax browser can request for list of photographs recently uploded on AJAX.

  6) The information for those images is send in jason format which can be easily converted
  to javascript object , which can be later used to display as image .

  7) Give them all the examples of regres.in.

  8) Values of an object can be another object.

  9) Basically web browsers are very good in understanding the string . for example (HTML tags)

  10) You must know everthing about jason , if you want to be successful front end developer.

*/


/*
    More on objects


    Objects are just like varaibles , but they contain many values


*/



var car = {
        type:'Fiat',
        model:'500',
        color:'White'
};

document.write(car.type);

/* The values are written in name:value pairs

  1) Name and values separted by pair

  2) Javascript objects are containers for named values called properties and
  values.

  3) You define and create javascript object with object literals

  4)
  Spaces and linevreaks are important , An object can span over multiple lines

*/


// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//
// var  person = {
//   firstName:'chinmay',
//   lastName: 'deshpande',
//   age:89,
//   eyeColor:'blue'
// };
//
//
// console.log(`My name is ${person.firstName} and my age is ${person.age}`);

// Object properties

/*
  The name:value pairs in javascript objects is calles as properties:

  for e.g

  Property                    Property Value
  firstName                        John

  lastName                         Doe

  age                               50

  eyeColor                         blue


  Accessing object properties , basically you can access properties in two
  ways

  1) objectName.propertyName  ()

  2) objectName['propertyName']

  */

// console.log(person.firstName);
// console.log(person['lastName']);


// Object Methods

/*

  Objects can also have methods

  Methods are basically actions performed on methods

  Methods are stored in properties as function definitions


  Property                    Property Value
  firstName                        John

  lastName                         Doe

  age                               50

  eyeColor                         blue

  fullName                         function(){
                                    return this.firstName + + this.lastname
                                  };


  Basically A Method is a function which is stored as property

*/


var  person = {
  firstName:'chinmay',
  lastName: 'deshpande',
  age:89,
  eyeColor:'blue',
  fullName: function(){
    return `${this.firstName}  ${this.lastName}`
    // Below is the old way
    //return " this.firstName +' '+this.lastName"
  }

};

console.log(person.fullName());
console.log(person.fullName);

/*
  The this keyword

1)  In a function definition , this refer to the "owner" of the function.

2)  In the example obove , this is the person object that "owns" the fullName functions

3)  In the other words , this .firstName means the first property of this object.

  // Accessing object methods

  // you can access object method with following methods


  objectName.methodName()


4) if you access the function without parameters , it will return function
  definition


5) When a JavaScript variable is declared with the keyword "new",
the variable is created as an object.

*/
