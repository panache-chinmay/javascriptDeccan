const listItem = document.getElementsByTagName('li');
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
const addElement = document.getElementById("ullist");
// listItem.addEventListener('mouseover',() => {
//     listItem.textContent = listItem.textContent.toUpperCase();
// });
// listItem.addEventListener('mouseout',() => {
//     listItem.textContent = listItem.textContent.toLowerCase();
// });



for(let i = 0 ; i <listItem.length;i++){

  listItem[i].addEventListener('mouseover',() => {
      listItem[i].textContent = listItem[i].textContent.toUpperCase();
  });
  listItem[i].addEventListener('mouseout',() => {
      listItem[i].textContent = listItem[i].textContent.toLowerCase();
  });

}


additemButton.addEventListener('click',() =>{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li')
  li.textContent = inputItem.value;
  ul.appendChild(li)
  inputItem.value = '';

  // Auto clearing the input
})

ullist.addEventListener('mouseover',(event) => {
    if(event.target.tagName == 'LI'){
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});
ullist.addEventListener('mouseout',(event) => {
    if(event.target.tagName == 'LI'){
    event.target.textContent = event.target.textContent.toLowerCase();
}
 });
