function playRound(playerSelection, computerSelection){
    let msg="";

    switch(playerSelection.toLowerCase()){
       
       case 'rock':
            switch(computerSelection){
                case 'rock':
                    msg="Tie";
                    break;
                
                case 'paper':
                    msg="Lose";
                    break;
                
                case 'scissors':
                    msg="Win";
                    break;
                
            }
       break;
       case 'paper':
            switch(computerSelection){
                case 'rock':
                    msg="Win";
                    break;
                
                case 'paper':
                    msg="Tie";
                    break;
                
                case 'scissors':
                    msg="Lose";
                    break;
            }
       break;
       case 'scissors':
            switch(computerSelection){
                case 'rock':
                    msg="Lose";
                    break;
                
                case 'paper':
                    msg="Win";
                    break;
                
                case 'scissors':
                    msg="Tie";
                    break;                        
            }
       break;

       default: msg="Enter a valid option";
    }
    if (msg == "Win") {
        console.log("You "+msg+"! "+playerSelection+" beats "+computerSelection);
    }
    else if(msg=="Lose"){
        console.log("You "+msg+"! "+computerSelection+" beats "+playerSelection);
    }
    else{
        console.log("Tie");
    }
    return msg;
}

function computerPLay(){
    let comres=Math.round(Math.random()*2);

    switch(comres){
        case 0:
            comres='rock';
            break;
        case 1:
            comres='paper';
            break;
        case 2:
            comres='scissors';
            break;
    }

    return comres;
}

function game(){

    let win=0;
    let lose=0;
    let tie=0;
    for (let i=0; i<5;i++){
        const playerSelection = prompt("Enter your play");
        const computerSelection = computerPLay();
        let jugada=playRound(playerSelection,computerSelection);
        if (jugada=="Win"){
        win++;
        }
        else if (jugada=="Lose"){
        lose++;
        }
        else {
        tie++;
        }
    }
    if (win>lose){
        result="You win the game!";
    }
    else if (lose>win){
        result="You lose the game! Try Again!";
    }
    else {
        result="Tie! Nice Try!"
    }

    return result;
}
    
console.log(game());



