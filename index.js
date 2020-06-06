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
});

document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

const text = "Hello i'm studying java script";
const reverseText = text.split('').reverse().join('');
console.log(reverseText)

const mockData = ['Bob', 'Alice', 'John', true, 100, 50, {name: "Doe"}];
for (let i = 0; i < mockData.length; i++) {
  console.log(mockData[i])
}

let i = 0;
while (i < 5) {
  console.log(mockData[i])
  i++
}

let j = 0;
while (j < mockData.length - 1) {
  console.log(mockData[j])
  j++;
}

let k = 0;
do {
  console.log(mockData[k])
  k++
} while (k < mockData.length)


let a = 0;
function count() {
  a++;
  console.log(a);
}
count();
count();

let b = 7;
function myFunc() {
  let b = 0;
  return function () {
    b++;
    console.log(b);
  }
}
const d = myFunc();
d();
d();
d();

var x = 8;
function changeX() {
  x++;
  console.log(x);
}
changeX();
changeX();

var v = 7;
function myFunc() {
  var v = 0;
  return function () {
    v++;
    console.log(v);
  }
}
const g = myFunc();
g();
g()
