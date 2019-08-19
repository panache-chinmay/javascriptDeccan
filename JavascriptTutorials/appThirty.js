//In JavaScript, objects are king. If you understand objects, you understand JavaScript.

//
// In JavaScript, almost "everything" is an object.
//
// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects
// All JavaScript values, except primitives, are objects.



// Primitive values are immutable (they are hardcoded and therefore cannot be changed).
//
// if x = 3.14, you can change the value of x. But you cannot change the value of 3.14.
//
// Value	Type	Comment
// "Hello"	string	"Hello" is always "Hello"
// 3.14	number	3.14 is always 3.14
// true	boolean	true is always true
// false	boolean	false is always false
// null	null (object)	null is always null
// undefined	undefined	undefined is always undefined

//---------------------------------------------------------------------------->

// Objects are Variables
// JavaScript variables can contain single values:

//
// Objects are variables too. But objects can contain many values.
//
// The values are written as name : value pairs (name and value separated by a colon).


// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//A JavaScript object is a collection of named values

//
// Object Properties
// The named values, in JavaScript objects, are called properties.
//
// Property	Value
// firstName	John
// lastName	Doe
// age	50
// eyeColor	blue
//
// Object Methods
// Methods are actions that can be performed on objects.
//
// Object properties can be both primitive values, other objects, and functions.
//
// An object method is an object property containing a function definition.
//
// Property	Value
// firstName	John
// lastName	Doe
// age	50
// eyeColor	blue
// fullName	function() {return this.firstName + " " + this.lastName;}
// JavaScript objects are containers for named values, called properties and methods.




  // Creating a JavaScript Object
  // With JavaScript, you can define and create your own objects.
  //
  // There are different ways to create new objects:
  //
  // Define and create a single object, using an object literal.
  // Define and create a single object, with the keyword new.
  // Define an object constructor, and then create objects of the constructed type.


//In ECMAScript 5, an object can also be created with the function Object.create()


// Three ways of defining object

//
// Using an Object Literal
// This is the easiest way to create a JavaScript Object.
//
// Using an object literal, you both define and create an object in one statement.
//
// An object literal is a list of name:value pairs (like age:50) inside curly braces {}.
//
// The following example creates a new JavaScript object with four properties:
//
// Example


//1.Spaces and line breaks are not important. An object definition can span multiple lines:

var person = {
              firstName:"John",
              lastName:"Doe",
              age:50,
              eyeColor:"blue"
            };


  // Using the JavaScript Keyword new
  // The following example also creates a new JavaScript object with four properties:


  // JavaScript Objects are Mutable
  // Objects are mutable: They are addressed by reference, not by value.
  //
  // If person is an object, the following statement will not create a copy of person:
  //
  // var x = person;  // This will not create a copy of person.
  // The object x is not a copy of person. It is person. Both x and person are the same object.
  //
  // Any changes to x will also change person, because x and person are the same object.







// <!DOCTYPE html>
// <html>
// <body>
//
// <p>JavaScript objects are mutable.</p>
// <p>Any changes to a copy of an object will also change the original.</p>
//
// <p id="demo"></p>
//
// <script>
// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
//
// var x = person;
// x.age = 10;
//
// document.getElementById("demo").innerHTML =
// person.firstName + " is " + person.age + " years old.";
// </script>
//
// </body>
// </html>

// Page Two 
