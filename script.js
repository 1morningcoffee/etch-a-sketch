const container = document.querySelector("#container");
const gridContainer = document.querySelector('#gridContainer');
const startButton = document.querySelector('#startGame');

for (let i = 0; i <  16; i++) {
    const column = document.createElement('div');
    column.className = 'column';
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.className = 'grid';

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
    
    column.appendChild(square);
    }
    
    gridContainer.appendChild(column);
}

startButton.addEventListener('click', () => {
    prompt('How many squares should each side of the grid contain?');
})