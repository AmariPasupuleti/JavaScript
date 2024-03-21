const playertext=document.querySelector('#player');
const computertext=document.querySelector('#computer');
const resulttext=document.querySelector('#score')

const choice=document.querySelectorAll('.selection');
console.log(choice)

let player;
let computer;
let result;

choice.forEach(button=>button.addEventListener("click",function(event){
    player=event.target.value;
    computerTurn();
    playertext.textContent=`You : ${player}`;
    computertext.textContent=`Computer: ${computer}`;
    resulttext.textContent=checkWinner()

}));

function computerTurn(){
    const random=Math.floor(Math.random()*3)+1;

    switch(random){
        case 1:
            computer="ROCK";
            break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCISSORS";
            break;

    }
}

function checkWinner(){
    if(player==computer){
        return "Draw"
    }
    else if(computer=="ROCK"){
        return (player=="PAPER")? "You Win!" : "You Lose!"
    }
    else if(computer=="PAPER"){
        return (player=="SCISSORS")? "You Win!" : "You Lose!"

    }
    else if(computer=="SCISSORS"){
        return (player=="ROCK")? "You Win!" : "You Lose!"
    }

}
