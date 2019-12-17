loadGrid(16);
function loadGrid(gridSize){
    clearGrid();
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            let div = document.createElement('div');
            div.classList.add('grid');
            div.style.width = ((850/gridSize)- .2) + "px";
            div.style.height = ((850/gridSize) - .2) + "px";
            document.getElementById('container').appendChild(div);
        }

    }
}
function clearGrid(){
    const parent = document.getElementById("container");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}