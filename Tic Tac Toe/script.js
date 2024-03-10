const board = document.getElementById('container');
const box = document.getElementsByClassName('box');
const reset = document.getElementById('resetBtn');
const players = ['X', 'O'];
let currentPlayer = players[0];
let endMessage = document.createElement('h2');
endMessage.textContent = 'X\'s turn';
endMessage.classList.add('endMsg');
board.after(endMessage);

const winningComninations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for(let i = 0; i < box.length; i++){
    box[i].addEventListener('click', ()=>{
        if(box[i].textContent !== ''){
            return;
        }
        box[i].textContent = currentPlayer;    
        if(checkWin(currentPlayer)){
            endMessage.textContent = `Game Over! ${currentPlayer} Wins!`;
            setTimeout(resetBoard, 2000);
            return;
        }
        if(checkTie()){
            endMessage.textContent = 'Game is Tied!';
            setTimeout(resetBoard, 2000);
            return; 
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
        if(currentPlayer === players[0]){
            endMessage.textContent = 'X\'s Turn';
        }
        else{
            endMessage.textContent = 'O\'s Turn';
        }
    });
}

function checkWin(currentPlayer){
    for(let i = 0; i < winningComninations.length; i++){
        const [a, b, c] = winningComninations[i];
        if(box[a].textContent === currentPlayer && box[b].textContent === currentPlayer && box[c].textContent === currentPlayer){
            return true;
        }
    }
    return false;
}
function checkTie(){
    for(let i = 0; i < box.length; i++){
        if(box[i].textContent === ''){
            return false;
        }
    }
    return true;
}
function resetBoard(){
    for(let i = 0; i < box.length; i++){
        box[i].textContent = '';
    }
    endMessage.textContent = 'X\'s Turn';
    currentPlayer = players[0];
}
reset.addEventListener('click', resetBoard);