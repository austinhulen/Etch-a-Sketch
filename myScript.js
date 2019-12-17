let gridSize = 16;
function loadGrid(){
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            let div = document.createElement('div');
            div.classList.add('grid');
            document.getElementById('container').appendChild(div);
        }
        let jump = document.createElement('br');
        document.getElementById('container').appendChild(jump);

    }
}