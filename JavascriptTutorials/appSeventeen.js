//document.getElementById('red').style.color = "red";
// Selecting the element

// program One

// const myHeading = document.getElementById('red'); // returns the element if present
//
// console.log(myHeading)
//
// myHeading.addEventListener('click', () => myHeading.style.color = 'red');

// Keys and mouse event such as click
// Second parameter is the call back function

// document is a global variable and get element by Id is the method of global object document

// program Two

// const myHeading = document.getElementById('red'); // returns the element if present
// const myButton = document.getElementById('myButton');
// console.log(myButton)
//
// myButton.addEventListener('click', () => myHeading.style.color = 'red');

// Our script is selecting both element correctly and changing it to red whwn clicked


// We can access the value of any element with .value

// const myHeading = document.getElementById('red'); // returns the element if present
// const myButton = document.getElementById('myButton');
// const myText = document.getElementById('myTextInput');
// console.log(myButton)
//
// myButton.addEventListener('click', () => myHeading.style.color = myText.value );

//program 4

//Selecting all element of a particular type
//(Similar program by tagName)


//
// const myHeading = document.getElementsByTagName('h1')[0]; // returns the element if present
// const myButton = document.getElementById('myButton');
// const myText = document.getElementById('myTextInput');
// console.log(myButton)
//
// myButton.addEventListener('click', () => myHeading.style.color = myText.value );


//program 5
//Remove the previous code and add new javascript code

//myList[2].style.color = 'purple'


// const mylist = document.getElementsByTagName('li');
//
//
// for(let i = 0 ;i < mylist.length ;i++ ){
//   mylist[i].style.color = "green";
// }
//
// // program 6
// // Selecting the element with class name
//
// const redClass = document.getElementsByClassName('red');
//
//
// for(let i = 0 ; i<redClass.length ;i++ ){
//   redClass[i].style.color = "red";
// }
