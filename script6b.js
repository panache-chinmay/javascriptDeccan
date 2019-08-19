
// More on  objects
/*
  1) In javascript objects are king  , if you understand object , you will
    understand JavaScript

 2) In JavaScript, almost "everything" is an object.

  Booleans can be objects (if defined with the new keyword)
  Numbers can be objects (if defined with the new keyword)
  Strings can be objects (if defined with the new keyword)
  Dates are always objects
  Maths are always objects
  Regular expressions are always objects
  Arrays are always objects
  Functions are always objects
  Objects are always objects
  All JavaScript values, except primitives, are objects.

3) JavaScript Primitives
    A primitive value is a value that has no properties or methods.
    A primitive data type is data that has a primitive value.
    JavaScript defines 5 types of primitive data types:

    string
    number
    boolean
    null
    undefined
    Primitive values are immutable (they are hardcoded and
    therefore cannot be changed).

4) if x = 3.14, you can change the value of x. But you cannot change the value of 3.14.

Value	       Type	                     Comment
"Hello"	    string	                 "Hello" is always "Hello"
3.14	      number	                  3.14 is always 3.14
true	      boolean	                  true is always true
false	      boolean	                  false is always false
null	      null (object)	            null is always null
undefined	  undefined	                undefined is always undefined



5) Objects are Variables
  JavaScript variables can contain single values:
  var person = 'Joe Deo';

6)Objects are variables too. But objects can contain many values.


7) The values are written as name : value pairs (name and value separated by a colon)

var person = {
                firstName:"John",
                lastName:"Doe",
                age:50,
                eyeColor:"blue"
              };

8) A JavaScript object is a collection of named values


9) Object Properties
The named values, in JavaScript objects, are called properties.

Property	   Value
firstName	   John
lastName	   Doe
age	         50
eyeColor	   blue
Objects written as name value pairs are similar to:

Associative arrays in PHP
Dictionaries in Python
Hash tables in C
Hash maps in Java
Hashes in Ruby and Perl



Object Methods
Methods are actions that can be performed on objects.

Object properties can be both primitive values, other objects, and functions.

An object method is an object property containing a function definition.

Property	     Value
firstName	      John
lastName	      Doe
age	            50
eyeColor	      blue
fullName	      function() {return this.firstName + " " + this.lastName;}

JavaScript objects are containers for named values, called properties and methods.

 */


 /*


Creating a JavaScript Object
With JavaScript, you can define and create your own objects.

There are different ways to create new objects:

1) Define and create a single object, using an object literal.
2) Define and create a single object, with the keyword new.
3) Define an object constructor, and then create objects of the constructed type.
4) In ECMAScript 5, an object can also be created with the function Object.create().

Using an Object Literal
This is the easiest way to create a JavaScript Object.

Using an object literal, you both define and create an object in one statement.

An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

The following example creates a new JavaScript object with four properties:


 */



 // Object literal

//
// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//
// /* Spaces and line breaks are not important.An object definition can span multiple lines:*/
//
//  var person = {
//     firstname : "John" ,
//     lastName : "Doe",
//     age:50,
//     eyeColor:"blue"
//  };
//
// // Using the JavaScript Keyword new
// // The following example also creates a new JavaScript object with four properties:
//
// var person2 = new Object();
// person2.firstName = "Chinmayee";
// person2.lastName = "Deshpandee";
// person2.age = 29;
// person2.rollNumber = 78;
//
// console.log(person2);
// document.write(person2.firstName);
// document.write("Two above examples do exactly the same thing , There is no need to use new Object()");
// document.write("For simplicity, readability and execution speed, use the first one (the object literal method)");
//
// // mutable .. (liable to change);
//
//
// //The object x is not a copy of person.
// //It is person. Both x and person are the same object.
// //Any changes to x will also change person, because x and person are the same object.
//
//
//
// var changeOne = {
//    firstname : "John" ,
//    lastName : "Doe",
//    age:50,
//    eyeColor:"blue"
// };

// var changeTwo = changeOne;
//
// // Now both changeTwo and changeOne are pointing to same object i.e same address
// // Change in one will cause change in second.
//
// changeTwo.age = 78;
// console.log(changeTwo);
// console.log("-------------------------------");
// console.log(changeOne);

// Javascript object properties

// Properties are the most important part of javaScript objects .


/*
JavaScript Properties
Properties are the values associated with a JavaScript object.

A JavaScript object is a collection of unordered properties.

Properties can usually be changed, added, and deleted, but some are read only.

*/

// Accessing javascript proeprties

// program 3

var changeThree = {
   firstname : "John" ,
   lastName : "Doe",
   age:50,
   eyeColor:"blue"
};
var x = "age";
console.log(changeThree.firstname) // Dot Notation
console.log(changeThree['lastName'])// Bracket Notation
console.log(changeThree[x]);
// The expression must evalute to property name


// Javascript for in Loop

// The javascript for ... in loop , loops thorugh every Properties of object

// for (variable in object) {
//   // code to be executed
// }
//The block of code inside of the for...in loop will be executed once for each property.


var
