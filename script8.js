/* Defining variables with let and constant

1) Till now we have only one way of declaring javascript i.e

using let and const keyword


 */

// var message = "Hello";
// const pi = 3.14159;
// let score = 0 ;

/*
creating unchanging variable with const keyword

1) const means the value the variable should not change

2) const pi = 3.14 ;

3) const should be the first chioce of programmer, when they want something

that should not be changed once the program runs

Examples :- Dimensions of user interface components , product prices

4) When you want to change  the value of variable in program , const is bad choice

example :- playing any  software updation game .

//common problem where you can use the javscript 'const' keyword.

5) You cannot change the value of const variable


6 ) Making the variable const inside the function , make it to the same scope and hence
the erroe is gone

*/
// var x = 200;
// function abc(){
//   var x = 100 ;
//   console.log(x);
// }
//
// console.log(abc());
// console.log(x


  // const x = 200;
  // function abc(){
  //   const x = 100 ;
  //   console.log(x);
  // }
  //
  // console.log(abc());
  // console.log(x)


  //
  // let x = 200;
  // function abc(){
  //   let x = 100 ;
  //   console.log(x);
  // }
  //
  // console.log(abc());
  // console.log(x)


// Same output for all three cases




/*


using  consts and Arrays with objects

*/


// Arrays and Objects with var keyword

/*
var x = 10 ;
x = "Ankita Gupta";
console.log(x);


var y = {
  name:"Chinmaya",
  rollNumber:89
};

y = [19,20,21]

console.log(y);

*/


// Arrays and Objects with const

// const abc = [2,4,5,6]
// abc.push(9);
// console.log(abc);


// We can modified Array with const keyword

// We cannot assign new data struture to same variable if we defined it with data type

// abc = {
//   name:"ChinmayDespande",
//   rollNumber:78
// }
// console.log(abc)

//----------------------------------------------------------------------------->
// We can modified object with const variable but cannot assigned new data struture to Same variable
// Not also of same type
//
// const dce = {
//     name:"Ninad",
//     rollNumber:78
// }
// dce.lastname = "Dani";


// dce = [8,9,999,98,99];
// console.log(dce);
// Not also of same type

//----------------------------------------------------------------------------->

// Defining varibale with let  keyword ..

// Let just work like var

// you can re-assign values using let keyword

//------------------------------------------------------------------------------>

// Varibles are function scoped

// let and constant have blocked scope.

// with car

// const person = {
//   first_name:"Andrew",
//   role:"Teacher"
// }
//
// function personDescription(person){
//
//   var description = person.first_name;
//   if(person.role){
//     description = description + "is a ";
//     description = description + person.role;
//   }
//   console.log(description)
// }
//
// personDescription(person);

// With const

// Assignment to the const

// const person = {
//   first_name:"Andrew",
//   role:"Teacher"
// }
//
// function personDescription(person){
//
//   const description = person.first_name;
//   if(person.role){
//     description = description + "is a ";
//     description = description + person.role;
//   }
//   console.log(description)
// }
//
// personDescription(person);


// Using let keyword
// const person = {
//   first_name:"Andrew",
//   role:"Teacher"
// }
//
// function personDescription(person){
//
//   let description = person.first_name;
//   if(person.role){
//     description = description + "is a ";
//     description = description + person.role;
//   }
//   console.log(description)
// }
// personDescription(person);

// Use of let in for loop -


// const buttons = document.getElementsByTagName('button');
//
// for(var i = 0 ; i < buttons.length ; i++){
//   const button = buttons[i];
//   button.addEventListener("click",function(){
//     alert("Button " +i+ " Pressed");
//   });
// }


// const buttons = document.getElementsByTagName('button');
//
// for(let i = 0 ; i < buttons.length ; i++){
//   const button = buttons[i];
//   button.addEventListener("click",function(){
//     alert("Button " +i+ " Pressed");
//   });
// }

for(let j = 0 ; j < 10 ; j++){

    console.log(j);

}

//console.log(j);

// More on let and constant keyword..


/*
constants are first option while declaring varaible

const is used for values you never want reassigning

let is used for the values you want to reassign (When used in block scope i.e in for loop)

var usage should be avoided when used in for loop

*/
