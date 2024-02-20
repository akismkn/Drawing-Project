// Create title h1
const title = document.createElement('h1')
title.innerText = 'Sketch Board';
title.classList.add('titleHead')
document.body.appendChild(title);

// Create button for grid selection
const button = document.createElement('button');
button.classList.add('gridButton');
button.innerText = 'Change Grid Size';
document.body.appendChild(button);
button.addEventListener('click', () => {
    do {
        size = prompt('Please enter a value between 1 and 100');
        size = parseInt(size);

        if (isNaN(size) || size < 1 || size > 100) {
            alert('Invalid input. Please enter a value between 1 and 100.');
        }
    } while (isNaN(size) || size < 1 || size > 100);
    resize(size);
});

// Create container div 
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// first grid creation
let size = 16;
resize(size);

let isMouseDown = false;

// Function to create or resize the grid
function resize(size) {
    // Clear the existing grid
    container.innerHTML = '';
    // Calculate the size of each square based on the total width
    const squareSize = 700 / size;
    // Create grid squares using javascript
    for (let i = 0; i < size; i++) {
        const outerContainer = document.createElement('div');
        outerContainer.classList.add('outer-container');
        for (let j = 0; j < size; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.width = `${squareSize}px`;
            gridSquare.style.height = `${squareSize}px`;
            outerContainer.appendChild(gridSquare);
        }
        container.appendChild(outerContainer);
    }
    const gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseenter', (event) => {
            if (isMouseDown) {
                event.target.classList.add('hovered');
            }
        });
    
        gridSquare.addEventListener('mousedown', () => {
            isMouseDown = true;
        });
    
        gridSquare.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
    });
};