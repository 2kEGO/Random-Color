const colorNameDisplay = document.getElementById('color-display');

const hexColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFBD33', '#33FFD5', '#3333FF', '#FF8C33', '#B2FF33', '#FF333D', '#FFC300', '#DAF7A6', '#FF33B8', '#C70039', '#FF33FF', '#FF3030', '#F08080', '#7FFF00', '#FFD700', '#4682B4'];

let currentColor = hexColors[Math.floor(Math.random() * hexColors.length)];

const colors = document.querySelector('#color-container');

let display = document.getElementById('color-container');

let backgroundColor = display.style.backgroundColor = currentColor;

let 


function changeColor(){
    currentColor = hexColors[Math.floor(Math.random() * hexColors.length)];
    display.style.backgroundColor = currentColor;
    colorNameDisplay.textContent = "Hex Color: " + currentColor;
    console.log(currentColor);
}
