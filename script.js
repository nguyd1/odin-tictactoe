// multiples of something (players) use factories
// one of something (gameBoard displayController) use modules

// players stored in object
const playerFactory=(name)=>{
    const sayHello=()=>console.log("hello");
    return {name,sayHello};
};

// allow players to put names
const name1=prompt("Enter name of Player 1:");
const name2=prompt("Enter name of Player 2:");

const player1=playerFactory(name1);
const player2=playerFactory(name2);

// start with storing gameboard array in gameboard object
const gameBoard=(()=>{
    let board=[];
})();


// flow of game stored in object
const displayController=(()=>{

})();

// build function to allow players to mark spots with dom


// check for game over each move


// start/restart button
const restart=document.querySelector(".restart");
restart.addEventListener("click",()=>{

});

// display winner