
const myButton = document.getElementById('contacts-btn');

const myButtonListener = () => {

  let div = document.createElement('div');
  div.innerHTML = "какой-то текст";

  document.body.appendChild(div);

};

myButton.addEventListener('click', myButtonListener);



