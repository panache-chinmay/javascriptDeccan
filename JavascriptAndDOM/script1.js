
/* The different number of browser events are key presses , scroll down and mouse */

// const myHeadings = document.getElementById('myHeadings');
/* if there no element with id , it will execute with error ,i.e
    cannot return property of null.
*/

// console.log(myHeadings);
//
// myHeadings.addEventListener('click',() => {
//   myHeadings.style.backgroundColor = "red";
// });
//
//
// // Selecting the page element by ID .
//
// //var headingOne ;
// console.log(myHeadings);
// console.log(myHeadings.innerHTML);
// console.log(myHeadings.innerText);
/*

If the varaible is defined and no value is assigned , then it comes out to be
undefined .

1) .addEventListener() tells the browser to listen  for the browser events.

2) There are many types of browser events such as key press ,mouse moves , scrolling of page.

3) First  parameter to the .addEventListener method is string type.

4) First , we select the element and manipulate the same on event
(i.e selecting the element by Id , manipulating the element to turn it to red on user click);

5) Selecting the element on a webpage is a big topic  , this sections covers the same topic

6) Selection is the way  to identify the element for a browser, and makes it available for us
to do something with the help of javascript

 */


// program 2 (Making the button to listen for events)


// const myHeadings2 = document.getElementById('myHeadings2');
// const myButton = document.getElementById('myButton');
// myButton.addEventListener('click',() =>{
//   myHeadings2.style.color = "green";
// })

/*
  In above case both the elements are selected correct and on event 'i.e'
  button click , the element is successfully navigated.
*/

// program 3

//PLEASE SHOW THEM THE INFORMATION ON CONSOLE

// Changing the  heading in accordance with the color , enter in input box.


// const myButton2 = document.getElementById('myButton2');
// const myheadings3 = document.getElementById('myHeadings3');
// const inputText = document.getElementById('changeColor');
//
// myButton2.addEventListener('click',() =>{
//   myHeadings3.style.backgroundColor = inputText.value;
// })


// Program 4

// Select all elements of a particular type ..

// Turning all the elements of unordered list to purple

/*
    1) document.getElementById returns only one element(one node element)

    2) document.getElementsByTagName returns one collection of html elements

    3) That collection is very similar to array , we can fetch each element by index

*/

// Fetching only single element .
// const firstElement = document.getElementsByTagName('li')[0]



// const allElements = document.getElementsByTagName('li');
// console.log(allElements);
//
// for(var i = 0 ; i < allElements.length ; i++){
//     allElements[i].style.color = "red";
// }


// Program 5

// Selecting elements with the same class name


var notAPurpleError = document.getElementsByClassName('not-a-error');
console.log(notAPurpleError);
for(var i = 0 ; i < notAPurpleError.length ;i++ ){
  notAPurpleError[i].style.color = "blue";
}



// program 6

// Using css queries to select the  page elements

/*
  document.querySelector();
  docuemnt.querySelectorAll();


  e.g

  // By default for the first element
  1) document.querySelector('li');

  // By default for all tagName with li

  2) document.querySelectorAll('li');

  // By using the id

  3)document.querySelector('#myHeadings');

  // By using className

  4) document.querySelectorAll('.myHeadings');

  // By an attribute name

  5) document.querySelector('[title = 'label']');


*/


// var oddy = document.querySelectorAll('li:nth-child(odd)');
// console.log(notAPurpleError);
// for(var i = 0 ; i < notAPurpleError.length ;i++ ){
//   oddy[i].style.color = "red";
// }


// program 7
