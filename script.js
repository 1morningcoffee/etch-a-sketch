const container = document.querySelector("#container");

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
    
    container.appendChild(column);
}
