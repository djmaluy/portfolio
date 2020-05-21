const myButtonClick = document.getElementById('contacts-btn');
let addNewElementWithText = () => {
  const newElement = document.createElement('div');
  newElement.innerText = 'How did i do this?';
  newElement.style = 'font-size: 30px; color: red';
  document.body.appendChild(newElement);
}
myButtonClick.addEventListener('click', addNewElementWithText);


let clickButtonToShowMyName = document.getElementById("myButton");
clickButtonToShowMyName.addEventListener('click', () => {
  alert("Andrii");
});
 clickButtonToShowMyName.addEventListener('mousemove', () => {
  console.log('Andrii')
} );

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

const text = "Hello i'm studying java script";
// const reverseText = text.split('');
const reverseText = text.split('').reverse().join('');
console.log(reverseText)


