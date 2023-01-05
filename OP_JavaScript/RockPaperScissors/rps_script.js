function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function playRound(playerSelec, botSelec){
    if (playerSelec == botSelec){
        return "Draw!"; 
    } 
    else if(playerSelec == "rock" && botSelec == "scissors"){
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelec == "scissors" && botSelec == "paper"){
        return "You Win! Scissors beats Paper"   
    }
    else if(playerSelec == "paper" && botSelec == "rock"){
        return "You Win! Paper beats Rock"
    }
    else{
        return "You Lose! " + botSelec + " beats " + playerSelec; 
    }
}

function game(){
    alert("The Rock Paper Scissors Game Has Begun!");
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter your selection!");
        playerSelection.toLowerCase();
        let botSelection = getRndInteger(1,3); 
        switch(botSelection){
            case 1: 
                botSelection = "rock";
                break; 
            
            case 2: 
                botSelection = "paper"; 
                break; 
            
            case 3: 
                botSelection = "scissors";
                break; 
        }
        alert(playRound(playerSelection, botSelection)); 
    }
    alert("5 Rounds have Finished: Game Over")
}
game(); 