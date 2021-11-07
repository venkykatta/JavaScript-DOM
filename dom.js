// console.log(document.designMode)
// console.log(document.URL)
// console.log(document.body)
// console.log(document.head)
// console.log(document.all[8])

// console.log(document.images)

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle)
// headerTitle.textContent = 'Venky';
// headerTitle.innerText = 'good';
// headerTitle.innerHTML = '<h3>Hello</h3>'

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'venky';
// items[1].style.fontWeight = 'bold';
// items[3].style.backgroundColor = 'yellow';

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'orange';
// }

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 10px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hi Venky!!';


// var titles = document.querySelectorAll('.title');
// console.log(titles)

// var itemList = document.querySelector('#items');

// console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode);
// itemList.parentNode.style.background = '#f4f4f4';

//parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// console.log(itemList.childNodes);

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousElementSibling);
// console.log(itemList.previousSibling);

// create div
// var newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'helloo';
// newDiv.setAttribute('title', 'Hello Div');

// var newDivText = document.createTextNode("Hello venky!");
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// container.insertBefore(newDiv, h1);

// var button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick(e) {
// console.log("Button Clicked!")
// document.getElementById('header-title').textContent = 'venky';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// console.log(e);
// console.log(e.target);
// console.log(e.target.className);
// console.log(e.target.id);
// console.log(e.target.classList);
//     var output = document.getElementById('output');
//     output.innerHTML = '<h3>' + e.target.id + '</h3>';

//     console.log(e.type);
// }

// var button = document.getElementById('button').addEventListener('click', runEvent);

// function runEvent(e) {
//     console.log('EVENT TYPE: ' + e.type);
// }

var button = document.getElementById("button");
var box = document.getElementById("box");

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);\

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);

function runEvent(e) {
    console.log('EVENT TYPE:' + e.type);

    // output.innerHTML = '<h3>Mouse x: ' + e.offsetX + '</h3><h3>Mouse Y: ' + e.offsetY + '</h3>';
    box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}