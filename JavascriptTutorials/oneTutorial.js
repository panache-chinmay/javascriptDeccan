// const myHeading = document.getElementById('red'); // returns the element if present
// const myButton = document.getElementById('myButton');
// console.log(myButton)
// myButton.addEventListener('click', () => myHeading.style.color = 'red');



const myHeading = document.getElementById('red'); // returns the element if present
const myButton = document.getElementById('myButton');
const myText = document.getElementById('myTextInput');
console.log(myButton)

myButton.addEventListener('click', () => myHeading.style.color = myText.value );
