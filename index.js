const myButtonClick = document.getElementById('contacts-btn');
let AddNewElementWithText = () => {
  const newElement = document.createElement('div');
  newElement.innerText = 'How did i do this?';
  newElement.style = 'font-size: 30px; color: red';
  document.body.appendChild(newElement);
}
myButtonClick.addEventListener('click', AddNewElementWithText);





