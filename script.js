const container = document.querySelector("#container");
const gridContainer = document.querySelector('#gridContainer');
const startButton = document.querySelector('#startGame');
let gridSize = 16;

function makeGrid() {
    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.className = 'grid';

            square.addEventListener('mouseover', () => {
                let R = Math.floor(Math.random() * 256);
                let G = Math.floor(Math.random() * 256);
                let B = Math.floor(Math.random() * 256);
                let randomColor = 'rgb(' + R + ',' + G + ',' + B + ')';
                square.style.backgroundColor = randomColor;
            })
        
        column.appendChild(square);
        }
        
        gridContainer.appendChild(column);
    }
}

makeGrid();

startButton.addEventListener('click', () => {
    do {
        gridSize = prompt('How many squares should each side of the grid contain? MAX 100');
    } while (gridSize > 100 || gridSize === null)

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    makeGrid();
})