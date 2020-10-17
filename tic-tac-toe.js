window.onload = function(){
    let board = document.getElementById("board");
    let resetBtn = document.querySelector(".btn");
    let message = document.getElementById("status");
    let boardTiles = board.children;
    let turn = 1;
    let tileArray = ["0","1","2","3","4","5","6","7","8"];
    let winner = false;

    for(let i = 0; i < boardTiles.length; i++){
        let tile = boardTiles[i];  
        tile.classList.add("square");
        tile.onmouseover = ()=>{tile.classList.add("hover")}
        tile.onmouseout = ()=>{tile.classList.remove("hover")}
        
        tile.addEventListener("click", function(){
            if(!tile.textContent && winner == false){ //winner is use to stop input after a winner is determined
                if(turn%2 == 0 ){ // update tiles
                    tile.textContent = "O";
                    tile.classList.add("O");
                    tileArray[i]="O";
                }else{
                    tile.textContent = "X";
                    tile.classList.add("X");
                    tileArray[i]="X";
                }
                winner = checkWin(message,tileArray,turn)
                turn++;
            }
        });   

        resetBtn.addEventListener("click",()=>{
            tile.classList.remove("O");
            tile.classList.remove("X");
            tile.textContent = "";
            message.classList.remove("you-won");
            message.textContent = "Move your mouse over a square and click to play an X or an O."
            tileArray = ["0","1","2","3","4","5","6","7","8"];
            winner = false;
            turn=1;
        });
    }
}

function checkWin(message, tileArray, numOfTurns){
    let winningTiles = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [0,3,6],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i<winningTiles.length; i++){
        let winningRow = winningTiles[i];
        let move1 = winningRow[0]; //the first index of the current iteration of the current row
        let move2 = winningRow[1];
        let move3 = winningRow[2];
        console.log(tileArray);
        if(tileArray[move1] == tileArray[move2] && tileArray[move2] == tileArray[move3]){
            message.textContent = `Congratulations! ${tileArray[move1]} is the Winner!`;
            message.classList.add("you-won");
            return true;
        }
    }

    if(numOfTurns == 9){
        message.textContent = "Its a Tie!"
        return true;
    }   

    return false;
}
    

 
    









