// Traversing through javascript object

// Using parentNode to tranverse up  the DOM

// DOM tranverse

// DOM tranversal is moving from one part of form to another .

// ELement.parentNode to get the current property of DOM
//
// const divList = document.getElementById('list')
// divList.addEventListener('click',(event) => {
//   if(event.target.tagName == "LI"){
//     let li = event.target;
//     let ul = li.parentNode;
//     ul.removeChild(li);
//   }
//
// });
// Deleting the elements with help of buttons
// const divList = document.getElementById('list')
// const ulList = document.getElementById('ullist')
// ulList.addEventListener('click',(event) => {
//   if(event.target.tagName == "BUTTON"){
//     let li = event.target.parentNode;
//     let ul = li.parentNode;
//     ul.removeChild(li);
//   }
// });
//

// use class in html to diffrentiate the handlers
// previuos sibling gives you the previous document node which is not all the time
// html ..please explain this with the example

//
//  [ In console please type
// ullist.previousSibling.previousSibling
// ullist.previousElementSibling ]
// Insert before method applied to the parent node and it takes two parameter


//var insertedNode = parentNode.insertBefore(newNode, referenceNode);
// click the upper most item push it to the lastitem

//program 5 (Moving up button in javascript)

// Moving up button
// ullist.addEventListener('click',(event) => {
//
//   if(event.target.tagName == 'BUTTON'){
//     if(event.target.className === 'remove'){
//       let li = event.target.parentNode;
//       let ul = li.parentNode;
//       ul.removeChild(li);
//     }
//     if(event.target.className === 'up'){
//       let li = event.target.parentNode;
//       let prevli = li.previousElementSibling
//       console.log(li.previousElementSibling);
//       let ul = li.parentNode
//       if(prevli){
//         ul.insertBefore(li,prevli);
//       }
//
//     }
//   }
// });

// program 6 (Moving down button in javascript)
// Moving down button
//
// ullist.addEventListener('click',(event) => {
//
//   if(event.target.tagName == 'BUTTON'){
//     if(event.target.className === 'remove'){
//       let li = event.target.parentNode;
//       let ul = li.parentNode;
//       ul.removeChild(li);
//     }
//     if(event.target.className === 'up'){
//       let li = event.target.parentNode;
//       let prevli = li.previousElementSibling;
//       console.log(li.previousElementSibling);
//       let ul = li.parentNode
//       if(prevli){
//         ul.insertBefore(li,prevli);
//       }
//     }
//       if(event.target.className === 'down'){
//         let li = event.target.parentNode;
//         let nextli = li.nextElementSibling;
//         let ul = li.parentNode;
//         if(nextli){
//           ul.insertBefore(nextli,li);
//         }
//       }
//
//     }
//
// });


// program 7
//
// // program will return all the html properties
//
// // Inserting the javasript button dynamically
// const myToggleButton = document.getElementById('toggleButton');
// const divList = document.getElementById('list')
// const myHeading = document.getElementById("myHeading");
// const input = document.querySelector('input');
// const p = document.querySelector('p.description');
// const button = document.querySelector('button');
// const list = document.querySelector('ul');
// const inputItem = document.querySelector('input.additem')
// const additemButton = document.querySelector('button.additem')
// const removeitemButton = document.querySelector('button.removeitem')
// let listl = list.children;
//
// console.log(listl)
//
// for(let v = 0 ;v< listl.length ; v++){
//     addbuttonofListitems(listl[v]);
// }
// // Adding new item
// additemButton.addEventListener('click',() =>{
//   let ul = document.getElementsByTagName('ul')[0]
//   let li = document.createElement('li')
//   li.textContent = inputItem.value;
//   // remove the code from html
//   addbuttonofListitems(li);
//   ul.appendChild(li)
//   inputItem.value = '';
//   // Auto clearing the input
// })
//
// // function will get called and with li as function parameter
function addbuttonofListitems(li){
// we need to create up down and remove button for all li elements
// mention code here and call the function
let up = document.createElement('button');
up.className = 'up';
up.textContent = 'Up'
li.appendChild(up); // we are adding button to li element so appening

let down = document.createElement('button');
down.className = 'down';
down.textContent = 'Down'
li.appendChild(down);

let remove = document.createElement('button');
remove.className = 'remove';
remove.textContent = 'Remove'
li.appendChild(remove);
//calling the function before adding new list item in ul
//calling the fucntion in additems
//take all list as one array in one so that predefined list have buttons
}
//
//
//
// ullist.addEventListener('click',(event) => {
//
//   if(event.target.tagName == 'BUTTON'){
//     if(event.target.className === 'remove'){
//       let li = event.target.parentNode;
//       let ul = li.parentNode;
//       ul.removeChild(li);
//     }
//     if(event.target.className === 'up'){
//       let li = event.target.parentNode;
//       let prevli = li.previousElementSibling;
//       console.log(li.previousElementSibling);
//       let ul = li.parentNode
//       if(prevli){
//         ul.insertBefore(li,prevli);
//       }
//     }
//       if(event.target.className === 'down'){
//         let li = event.target.parentNode;
//         let nextli = li.nextElementSibling;
//         let ul = li.parentNode;
//         if(nextli){
//           ul.insertBefore(nextli,li);
//         }
//       }
//
//     }
//
// });

// program 8
// parentnode.firstchild and parentnode.lastchild
// parentNode.firstElementChild and parentNode.lastElementChild


// // program will return all the html properties
//
// Inserting the javasript button dynamically
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
let listl = list.children;

let firstlistItem = list.firstElementChild;
let lastlistIteam = list.lastElementChild;

firstlistItem.style.color = "orange";
lastlistIteam.style.color = "yellow";

// Assignment --> remove the property


console.log(listl)

for(let v = 0 ;v< listl.length ; v++){
    addbuttonofListitems(listl[v]);
}
// Adding new item
additemButton.addEventListener('click',() =>{
  let ul = document.getElementsByTagName('ul')[0]
  let li = document.createElement('li')
  li.textContent = inputItem.value;
  // remove the code from html
  addbuttonofListitems(li);
  ul.appendChild(li)
  inputItem.value = '';
  // Auto clearing the input
})

// function will get called and with li as function parameter
function addbuttonofListitems(li){
// we need to create up down and remove button for all li elements
// mention code here and call the function
let up = document.createElement('button');
up.className = 'up';
up.textContent = 'Up'
li.appendChild(up); // we are adding button to li element so appening

let down = document.createElement('button');
down.className = 'down';
down.textContent = 'Down'
li.appendChild(down);

let remove = document.createElement('button');
remove.className = 'remove';
remove.textContent = 'Remove'
li.appendChild(remove);
//calling the function before adding new list item in ul
//calling the fucntion in additems
//take all list as one array in one so that predefined list have buttons
}



ullist.addEventListener('click',(event) => {

  if(event.target.tagName == 'BUTTON'){
    if(event.target.className === 'remove'){
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if(event.target.className === 'up'){
      let li = event.target.parentNode;
      let prevli = li.previousElementSibling;
      console.log(li.previousElementSibling);
      let ul = li.parentNode
      if(prevli){
        ul.insertBefore(li,prevli);
      }
    }
      if(event.target.className === 'down'){
        let li = event.target.parentNode;
        let nextli = li.nextElementSibling;
        let ul = li.parentNode;
        if(nextli){
          ul.insertBefore(nextli,li);
        }
      }

    }

});
