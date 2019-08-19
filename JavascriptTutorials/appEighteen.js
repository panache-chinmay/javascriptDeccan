// HTML three
const idElement = document.querySelector('#listA')
console.log(idElement)
idElement.style.color = "red";

const classElement = document.querySelectorAll('.listClass')
console.log(classElement)
for(let i = 0 ; i < classElement.length ; i++){
  classElement[i].style.color = 'green';
}

const even = document.querySelectorAll('li:nth-child(even)');
for(let i = 0 ; i < even.length ; i++){
    even[i].style.backgroundColor ="yellow";
}

const odd = document.querySelectorAll('li:nth-child(odd)');
for(let i = 0 ; i < odd.length ; i++){
    odd[i].style.backgroundColor ="orange";
}

// How can we choose the correct selector
// what we have learn is supported by all browsers
// There are few methods which are not supported by all browsers

// can I use and mozilla developer network
