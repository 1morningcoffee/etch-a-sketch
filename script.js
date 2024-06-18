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
                square.style.backgroundColor = 'black';
            })
        
        column.appendChild(square);
        }
        
        gridContainer.appendChild(column);
    }
}

makeGrid();

startButton.addEventListener('click', () => {
    gridSize = prompt('How many squares should each side of the grid contain?');
    makeGrid();
})