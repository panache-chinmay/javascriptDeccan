// Scoping anwser the question

//"Where can we access a certain variable?"

// Each new function creates a scope :

// the space / environment , in which the varaible it defines are accessible

// Lexical scoping :-  a function that is lexically within another function
//gets access to the scope of the outer fucntion

// Example of Lexical scoping
// var a = "Hello!";
// first()
//
// function first(){
//   var b = 'Hi';
//   second();
//
//   function second(){
//     var c = 'Hey';
//     console.log(a + b + c);
//   }
// }

// program 2

// var a = "Hello";
// first();
//
// function first() {
//   var b = 'Hi';
//   second();
//
//   function second(){
//     var c = 'Hey';
//     third()
//   }
// }
//
// function third(){
//   var d = 'John';
//   console.log(a + d);
//
// }

// this keyword in javascript

// How the javscript work behind the scences (The 'this'keyword)

// This is the variable which every execution context will store in execution context

// regular function call : the this keyword points at the global object
//(the window object in the browser)


// Method call : the  this variable points to the object that is calling the method

//The this keyword is not assigned to a value until a function where it is called is defined .

// (Execution context is created as soon as the function is invokes )

// logging this varaible for the global execution context

// The this keyword in global execution context is this keyword.

// In regular function call , this method will point to the global object (global window object)

// console.log(this);

calculateAge(1985);

function calculateAge(year){
  console.log(2016-year);
  console.log(this);
}


// The regular function call is attached to the global object

var john = {
  name:'John',
  yearOfBirth:1990,
  calculateAge:function(){
    console.log(this);
  }
}
john.calculateAge();

// when the regular a function call happens the default object is window object

// call the function inside funtion in object using function declaration which ,akes it the global object

var john = {
  name:'John',
  yearOfBirth:1990,
  calculateAge:function(){
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    function innerFunction(){
      console.log(this)
    }
    innerFunction();
  }
}
john.calculateAge();


// treating the function as variable and borrowing the function


var mike = {
  name:'Mike',
  yearOfBirth:1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

// this varaible is always assign the value of varaible which is being called.

// There are functions attached to objects and the object is called as document object
















// function insude the method is function expression not function declaration

// this variable is now the part of  john object
