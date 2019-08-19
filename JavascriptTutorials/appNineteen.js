// Index html 4
// Making changes to the DOM


// Getting and Setting text with textContent and innerHTML

// Element.textContent
// Element.innerHTML

// textContent to either read or set value of HTML element
// The other way of altering element is inner HTMl
//
// console.log("Hello");
//
// const myHeading = document.querySelector('h1');
// console.log(myHeading.textContent)
//
// // changing the content of HTML element with textContent
//
// myHeading.textContent = "New heading inserted"


//Adding input text and button and giving each the same class

//Program One

// const myHeading = document.getElementById("myHeading");
// const input = document.querySelector('input');
// const p = document.querySelector('p.description');
// const button = document.querySelector('button');
//
//  button.addEventListener('click',() =>{
//    p.textContent = input.value +":"
//  })

//  const myHeading = document.getElementById("myHeading");
//  const input = document.querySelector('input');
//  const p = document.querySelector('p.description');
//  const button = document.querySelector('button');
//
//   button.addEventListener('click',() =>{
//     p.innerHTML = input.value +":"
//   })
//
// console.log(document.querySelector('ul').innerHTML)

//innerHTML gives the complete UI element

// Program Two


//  const myHeading = document.getElementById("myHeading");
//  const input = document.querySelector('input');
//  const p = document.querySelector('p.description');
//  const button = document.querySelector('button');
//  const list = document.querySelector('ul');
//
//   button.addEventListener('click',() =>{
//     list.innerHTML = "<li>New list Implemented  </li>"
//   })

// console.log(document.querySelector('ul').innerHTML)

// Changing the element attribute

// program 3
// tagName.attributeName ---> gives you the value
// tagName.attribute = 'newVaule' ---> setting the new value
// Element.className


 //
 // const myHeading = document.getElementById("myHeading");
 // const input = document.querySelector('input');
 // const p = document.querySelector('p.description');
 // const button = document.querySelector('button');
 // const list = document.querySelector('ul');
 //
 //  button.addEventListener('click',() =>{
 //    list.innerHTML = "<li>New list Implemented  </li>"
 //  })

//  p.title = "New description added"
// This is not recommended

// program 4
// Styling elements


//Element.style.color

// Style is itself is a object

// Element.style to view all the styles (all are inline css styles)

//Element.style.attribute ---> gives you value
//
// const myToggleButton = document.getElementById('toggleButton');
// const divList = document.getElementById('list')
// const myHeading = document.getElementById("myHeading");
// const input = document.querySelector('input');
// const p = document.querySelector('p.description');
// const button = document.querySelector('button');
// const list = document.querySelector('ul');
//
// myToggleButton.addEventListener('click',() =>{
//   if(divList.style.display =='none'){
//     divList.style.display = 'block'
//     myToggleButton.textContent = 'Hide Element'
//   }
//   else{
//     divList.style.display = 'none';
//     myToggleButton.textContent = 'ShowElement'
//   }
// })
 // button.addEventListener('click',() =>{
 //   list.innerHTML = "<li>New list Implemented  </li>"
 // })

 // button also refers to first button which is togglebutton so
 // both the events are getting called


//program 5 and 6 and program 7
 // Creating the new DOM elements

 // document.createElement('elementname')

 // creating element will not display the element to DOM

 // Removing the elements from the page

 // Appending nodes

 // Node belongs to DOM
 //Elements are plain HTML

const myToggleButton = document.getElementById('toggleButton');
const divList = document.getElementById('list')
const myHeading = document.getElementById("myHeading");
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const inputItem = document.querySelector('input.additem')
const additemButton = document.querySelector('button.additem')
const removeitemButton = document.querySelector('button.removeitem')

myToggleButton.addEventListener('click',() =>{
  if(divList.style.display =='none'){
    divList.style.display = 'block'
    myToggleButton.textContent = 'Hide Element'
  }
  else{
    divList.style.display = 'none';
    myToggleButton.textContent = 'ShowElement'
  }
})
 button.addEventListener('click',() =>{
   list.innerHTML = "<li>New list Implemented  </li>"
 })

additemButton.addEventListener('click',() =>{
  let ul = document.getElementsByTagName('ul')[0]
  let li = document.createElement('li')
  li.textContent = inputItem.value;
  ul.appendChild(li)
  inputItem.value = '';

  // Auto clearing the input
})

// additemButton.addEventListener('click',() =>{
//   let ul = document.getElementsByTagName('ul')[0]
//   let li = document.createElement('li')
//   li.textContent = inputItem.value;
//   ul.appendChild(li)
//   inputItem.value = ''
//
//   // Auto clearing the input
// })
//

removeitemButton.addEventListener('click',() =>{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child')
  ul.removeChild(li)

})

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

// Event bubling in javascript
// Individual listener consumes more browser memory

// The event object


//const listItem = document.getElementsByTagName('li')
//for(let i = 0 ; i <listItem.length;i++){

  // divList.addEventListener('mouseover',() => {
  //     listItem[i].textContent = listItem[i].textContent.toUpperCase();
  // });
  // divList.addEventListener('mouseout',() => {
  //     listItem[i].textContent = listItem[i].textContent.toLowerCase();
//  });

//}

// The event object

// document.addEventListener('click',(event) => {
//   console.log(event.target);
// });

// Add the event parameter so that the event object is available inside the
// listener
//program 5 (The event object and bubbling concept in javascript)

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
