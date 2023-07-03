// 1
const tooltip = document.querySelector('.tooltip');
const input = document.getElementById('input');

input.addEventListener('focus', tooltipHandler);
input.addEventListener('blur', tooltipHandler);

function tooltipHandler() {
    tooltip.classList.toggle('visible');
}

// 2
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
let userInput = '';

button1.addEventListener('click', button1Handler);
button2.addEventListener('click', button2Handler);

function button1Handler() {
    userInput = prompt('Надайте url адресу');
    let protocol = userInput.slice(0, 4);
    if(protocol !== 'http') {
        userInput = 'https://' + userInput;
    }
    protocol = userInput.slice(0, 5);
    if(protocol !== 'https') {
        userInput = userInput.replace('http', 'https');
    }
}

function button2Handler() {
    window.location.assign(userInput);
}

// 3
(function createTable() {
    const tableDiv = document.getElementById('table');
    const table = document.createElement('table');
    for(let i = 0; i < 10; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for(let j = (i * 10) + 1; j <= ((i + 1) * 10); j++) {
            const td = document.createElement('td');
            td.textContent = j;
            tr.appendChild(td);
        }
    }
    tableDiv.appendChild(table);
})();

// 4
(function imageHrefRandom() {
    const imageDiv = document.getElementById('image');
    const image = document.createElement('img');
    image.src = `images/${Math.floor(Math.random()*10)}.jpg`;
    imageDiv.appendChild(image);
})();
