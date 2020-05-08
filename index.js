const myButtonClick = document.getElementById('contacts-btn');
let AddNewElementWithText = () => {
  const newElement = document.createElement('div');
  newElement.innerText = 'How can i do this?';
  document.body.appendChild(newElement);
}
myButtonClick.addEventListener('click', AddNewElementWithText);





