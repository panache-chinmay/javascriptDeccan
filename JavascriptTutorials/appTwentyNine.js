// Creating objects : function Constructors

// In javscript there are multiple ways of creating constructor

// The most efficient way is using function constructor

// Creating object using function constructor

// First letter of function constructor is capital.....

//
// var john = {
//   name:'john',
//   yearOfBirth:1990,
//   job:'teacher'
// };

// var Person = function(name,yearOfBirth,job){
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   this.calculateAge = function(){
//     console.log(2016 - this.yearOfBirth) ;
//   }
// }
//
//
// var john = new Person('John',1990,'teacher');
// john.gender = "Male";
// console.log(john);
// john.calculateAge();
// var jane = new Person('Jane',1969,'designer');
// console.log(jane);
// var mark = new Person('Mark',1948,'retired');
// console.log(mark);



// When we use a new operator a brand new empty object is created
// then the constrscutor object is called .
//calling new function will create a new execution context which will also has this variable

// new operator takes care of this keyword in global varaible pointing to same object .
// new keyword helps to point this variable to the new empty object not to the global object

// If we write method inside the function constructor it will get attach it will attached to
//every created instance

// We need to add all the methods and properties which we want to get inherited to the
// constructor prototype property ...

// Inheritance in practice using prototype chain
var Person = function(name,yearBirth,job){
    this.name = name;
    this.yearBirth = yearBirth;
    this.job = job;
  //   this.calculateAge = function(){
  //   console.log(2016 - this.yearOfBirth);
  // }
}

Person.prototype.lastName = "smith";
Person.prototype.calculateAge = function(){
  console.log(2016 - this.yearBirth);
}
var johny = new Person('John',1990,'DR');
var johny2 = new Person('John2',19902,'DR2');
var johny3 = new Person('John3',19903,'DR3');
console.log(johny);
johny.calculateAge();
johny2.calculateAge();
johny3.calculateAge();

console.log(johny.lastName)
console.log(johny2.lastName)
console.log(johny3.lastName)

console.log(johny.hasOwnProperty('job'));
console.log(johny2.hasOwnProperty('job'));
console.log(johny3.hasOwnProperty('job'));


console.log(johny instanceof Person )


// Using inheritance defining a property in prototype of function constructor

// # Tutorial 3
// The prototype chain in console
// console can be also used for inspecting the object


// prototype property of the object constructor
// All are the instances of object object (constructor)



// Object function constructor also has the prototype property


// To proof everything is object

var x = [1,2,3]
console.info(x) // Gives us all the information about the array property
// All methods are stored in the array instance





























// Each and every object we create  is the instance of global object (Object)

// null is the only one that has no prototype
//
// console.log(john.hasOwnProperty('Gender'));
// console.log(john.isPrototypeOf('Person'));
// console.log(john.constructor());
// console.log(john.toString());
// console.log(john.valueOf('yearOfBirth'));
