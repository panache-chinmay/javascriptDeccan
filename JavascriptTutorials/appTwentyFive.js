// Hoisting
// Hoisting is the default javascript behaviour of moving declartion to top
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.


// program One

//
// <!DOCTYPE html>
// <html>
// <body>
//
// <p id="demo"></p>
//
// <script>
// x = 5; // Assign 5 to x
//
// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;           // Display x in the element
//
// var x; // Declare x
// </script>
//
// </body>
// </html>

// Program 2

//
// <!DOCTYPE html>
// <html>
// <body>
//
// <p id="demo"></p>
//
// <script>
// var x; // Declare x
// x = 5; // Assign 5 to x
//
// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;           // Display x in the element
// </script>
//
// </body>
// </html>


// Hoisting is JavaScript's default behavior of moving all declarations to the top of
// the current scope (to the top of the current script or the current function)



// The let and const keyword

// variable declared with the let and the const keyword are not hoisted


// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.
//
// Example 1 does not give the same result as Example 2:


// Program 3


//
// <!DOCTYPE html>
// <html>
// <body>
//
// <p id="demo"></p>
//
// <script>
// var x = 5; // Initialize x
// var y = 7; // Initialize y
//
// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;       // Display x and y
//
// </script>
//
// </body>
// </html>

// Program 4

// <!DOCTYPE html>
// <html>
// <body>
//
// <p id="demo"></p>
//
// <script>
// var x = 5;  // Initialize x
//
// elem = document.getElementById("demo");      // Find an element
// elem.innerHTML = "x is " + x + " and y is " + y;  // Display x and y
//
// var y = 7;  // Initialize y
// </script>
//
// </body>
// </html>

// Program 5
//
// Does it make sense that y is undefined in the last example?
//
// This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.
//
// Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.
//
// Example 2 is the same as writing:

// <!DOCTYPE html>
// <html>
// <body>
//
// <p id="demo"></p>
//
// <script>
// var x = 5; // Initialize x
// var y;   // Declare y
//
// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;       // Display x and y
//
// y = 7;   // Assign 7 to y
//
// </script>
//
// </body>
// </html>

// Declare Your Variables At the Top !
// Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.
//
// If a developer doesn't understand hoisting, programs may contain bugs (errors).
//
// To avoid bugs, always declare all variables at the beginning of every scope.
//
// Since this is how JavaScript interprets the code, it is always a good rule.



// Hoisting  with var and let keyword

// Program 6 with var it is preferable

//
// <!DOCTYPE html>
// <html>
// <body>
//
// <h2>JavaScript Hoisting</h2>
//
// <p>With <b>var</b>, you can use a variable before it is declared:</p>
//
// <p id="demo"></p>
//
// <script>
// carName = "Volvo";
// document.getElementById("demo").innerHTML = carName;
// var carName;
// </script>
//
// </body>
// </html>


//
// Variables defined with let are not hoisted to the top.
//
// Using a let variable before it is declared will result in a ReferenceError.
//
// The variable is in a "temporal dead zone" from the start of the block until it is declared:


// program 7
//
// <!DOCTYPE html>
// <html>
// <body>
//
// <h2>JavaScript Hoisting</h2>
//
// <p>With <b>var</b>, you can use a variable before it is declared:</p>
//
// <p id="demo"></p>
//
// <script>
// carName = "Volvo";
// document.getElementById("demo").innerHTML = carName;
// let carName;
// </script>
//
// </body>
// </html>
