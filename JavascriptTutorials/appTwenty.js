// Responding to user action

// What is event ?

// click

// dbclick

// mouseup

// mousedown

// mousemove

// mouseout

// For mobile phones

// touchstart

// touch move

// touch end
// ------> Button press
// keydown
// key up
// key press


// Function as paramter
// Function are first class citizen in javascript
// Function can be treated as any other data type
// Data types in javascript are numbers , objects , arrays

// program One

// function say(something){
//   console.log(something);
// }
//
// function exe (fun,args){
//   fun(args);
// }
//
// exe(say,"Hi there")

// Program Two

// function exe (fun,args){
//   fun(args);
// }
//
// exe((something) => {
//   console.log(something);
// },"Hi there")

// we have now transformed a statement into an expression
// This is what called as anonymous function in javascript (function without name)


// Delaying execution with set timeout

// set timeout function in javascript
// with certain amount of time we need to call back function ,
//hence it is know as call back function


// window.setTimeout((something) => {
//   console.log(something);
// },3000,'Greetings');

// This is call back function on 3 seconds delay

// Listening on events with event listener function

// Making a site interactive

//1.  Selecting the element on page

//2 . Manipulating the addEventListener

//Listening to user action
// EventTarget.addEventListener()


//target.addEventListener(type,listener[,options]);

// Add event listerner takes a event type and call back function

// Mouse over and mouse out

// const listItem = document.getElementsByTagName('li')[0];
// listItem.addEventListener('mouseover',() => {
//     listItem.textContent = listItem.textContent.toUpperCase();
// });
// listItem.addEventListener('mouseout',() => {
//     listItem.textContent = listItem.textContent.toLowerCase();
// });

// Applying event handler to all element lists



// const listItem = document.getElementsByTagName('li');
//
//
//
// for(let i = 0 ; i <listItem.length;i++){
//
//   listItem[i].addEventListener('mouseover',() => {
//       listItem[i].textContent = listItem[i].textContent.toUpperCase();
//   });
//   listItem[i].addEventListener('mouseout',() => {
//       listItem[i].textContent = listItem[i].textContent.toLowerCase();
//   });
//
// }




// Event bubbling and Delegation

//
// const listItem = document.getElementsByTagName('li')
// for(let i = 0 ; i <listItem.length;i++){
//
//   listItem[i].addEventListener('mouseover',() => {
//       listItem[i].textContent = listItem[i].textContent.toUpperCase();
//   });
//   listItem[i].addEventListener('mouseout',() => {
//       listItem[i].textContent = listItem[i].textContent.toLowerCase();
//   });
//
// }



// Re-read the concept of the event object

// divList.addEventListener('mouseover',(event) => {
//     if(event.target.tagName == 'LI'){
//     event.target.textContent = event.target.textContent.toUpperCase();
//   }
// });
// divList.addEventListener('mouseout',(event) => {
//     if(event.target.tagName == 'LI'){
//     event.target.textContent = event.target.textContent.toLowerCase();
// }
//  });
