// multiples of something (players) use factories
// one of something (gameBoard displayController) use modules

const restart=document.querySelector(".restart");
const message=document.querySelector(".message");
const boxes=document.querySelectorAll(".container div");

let player1;
let player2;
let player;
let count=0;

// players stored in object
const playerFactory=(name)=>{
    return {name};
};

// start with storing gameboard array in gameboard object
const gameBoard=(()=>{
    let board=new Array(9);
    return {board};
})();

// flow of game stored in object
const displayController=(()=>{
    const move=(e,player)=>{
        const id=e.target.id;
        if(gameBoard.board[id]==null){
            count++;

            gameBoard.board[id]=player==="player1"?"X":"O";
            e.target.textContent=gameBoard.board[id];

            player=player==="player1"?"player2":"player1";

            message.textContent=player==="player1"?player1.name+" Move":player2.name+" Move";
            
            result(count);
        }
        return player;
    };

    const result=(count)=>{
        // check for game over each move
        let xWin=false, oWin=false;

        if(gameBoard.board[0]==="X" && gameBoard.board[1]==="X" && gameBoard.board[2]==="X")
            xWin=true;
        if(gameBoard.board[3]==="X" && gameBoard.board[4]==="X" && gameBoard.board[5]==="X")
            xWin=true;
        if(gameBoard.board[6]==="X" && gameBoard.board[7]==="X" && gameBoard.board[8]==="X")
            xWin=true;
        if(gameBoard.board[0]==="O" && gameBoard.board[1]==="O" && gameBoard.board[2]==="O")
            oWin=true;
        if(gameBoard.board[3]==="O" && gameBoard.board[4]==="O" && gameBoard.board[5]==="O")
            oWin=true;
        if(gameBoard.board[6]==="O" && gameBoard.board[7]==="O" && gameBoard.board[8]==="O")
            oWin=true;

        if(gameBoard.board[0]==="X" && gameBoard.board[3]==="X" && gameBoard.board[6]==="X")
            xWin=true;
        if(gameBoard.board[1]==="X" && gameBoard.board[4]==="X" && gameBoard.board[7]==="X")
            xWin=true;
        if(gameBoard.board[2]==="X" && gameBoard.board[5]==="X" && gameBoard.board[8]==="X")
            xWin=true;
        if(gameBoard.board[0]==="O" && gameBoard.board[3]==="O" && gameBoard.board[6]==="O")
            oWin=true;
        if(gameBoard.board[1]==="O" && gameBoard.board[4]==="O" && gameBoard.board[7]==="O")
            oWin=true;
        if(gameBoard.board[2]==="O" && gameBoard.board[5]==="O" && gameBoard.board[8]==="O")
            oWin=true;

        if(gameBoard.board[0]==="X" && gameBoard.board[4]==="X" && gameBoard.board[8]==="X")
            xWin=true;
        if(gameBoard.board[2]==="X" && gameBoard.board[4]==="X" && gameBoard.board[6]==="X")
            xWin=true;
        if(gameBoard.board[0]==="O" && gameBoard.board[4]==="O" && gameBoard.board[8]==="O")
            oWin=true;
        if(gameBoard.board[2]==="O" && gameBoard.board[4]==="O" && gameBoard.board[6]==="O")
            oWin=true;

        // display winner
        if(xWin || oWin){
            message.textContent=xWin?player1.name+" Wins":player2.name+" Wins";
            boxes.forEach(box=>box.removeEventListener("click",turn));
        }
        else if(count===9){
            message.textContent="Tie";
            boxes.forEach(box=>box.removeEventListener("click",turn));
        }
    };

    return {move,result};
})();

// start/restart button
restart.addEventListener("click",()=>{
    // allow players to put names
    const name1=prompt("Enter name of Player 1:");
    const name2=prompt("Enter name of Player 2:");

    player1=playerFactory(name1);
    player2=playerFactory(name2);

    // build function to allow players to mark spots with dom
    boxes.forEach(box=>box.addEventListener("click",turn));

    // reset game state
    for(let i=0;i<boxes.length;i++) boxes[i].textContent="";
    message.style.visibility="visible";
    message.textContent=name1+" Move";
    gameBoard.board=new Array(9);
    player="player1";
    count=0;
});

function turn(e){player=displayController.move(e,player)}