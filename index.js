const myButtonClick = document.getElementById('contacts-btn');
let addNewElementWithText = () => {
  const newElement = document.createElement('div');
  newElement.innerText = 'How did i do this?';
  newElement.style = 'font-size: 30px; color: red';
  document.body.appendChild(newElement);
}
myButtonClick.addEventListener('click', addNewElementWithText);


let clickButtonToShowMyName = document.getElementById("myButton");
let showMyNameByHover = () => {
  console.log("Andrii");
}
let showMyNameByClick = () => {
  alert('Andrii')
}
clickButtonToShowMyName.addEventListener('click', showMyNameByClick);
clickButtonToShowMyName.addEventListener('mousemove', showMyNameByHover );




