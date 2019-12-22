const GRID_SIZE = 850; //Size of the grid for width and height, if you change this you need to change the css property for the container to match
let lastUsedSize = 16;
loadGrid(lastUsedSize);
function loadGrid(gridSize){
    clearGrid();
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            let div = document.createElement('div');
            div.classList.add('grid');
            div.style.width = ((GRID_SIZE/gridSize)- .2) + "px";
            div.style.height = ((GRID_SIZE/gridSize) - .2) + "px";
            document.getElementById('container').appendChild(div);
        }

    }
    listen();
}
function clearGrid(){
    const parent = document.getElementById("container");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

function reset(){
    clearGrid();
    loadGrid(lastUsedSize);
}

function changeGridSize(){
    let userInput = window.prompt("Enter how many squares you want for each column and rows. Example: 15 will make a 15x15 grid. ");
    loadGrid(userInput);
    lastUsedSize = userInput;
}

function listen(){
//selects all div with class grid
const divs = document.querySelectorAll('div.grid');
divs.forEach((div) => {
  div.addEventListener('mouseenter', (e) => {
    div.classList.add('activated');
  });
});
}