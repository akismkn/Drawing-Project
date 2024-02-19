// Number of rows and columns in the grid
// In case we want to change the number
const rows = 16;
const columns = 16;

// Create container div using JavaScript
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// Create grid squares using JavaScript
for (let i = 0; i < rows; i++) {
    const outerContainer = document.createElement('div');
    outerContainer.classList.add('outer-container');
    for (let j = 0; j < columns; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        outerContainer.appendChild(gridSquare);
    }
    container.appendChild(outerContainer);
}