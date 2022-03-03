/*rock paper scissors game*/

const pl = "Rock";

function computerPlay (){
    let n = Math.floor(Math.random()*3);

    if(n==0){
        return "Rock";
    }else if(n==1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function playRound(player,cpu){
    let p = player;
    let c = cpu;

    if(p=="rock" && c=="Paper"){
        return "You lose! Paper beats rock.";
    }else if(p=="rock" && c=="Scissors"){
        return "You win! Rock beats scissors.";
    }else if(p=="paper" && c=="Scissors"){
        return "You lose! Scissors beat paper.";
    }else if(p=="paper" && c=="Rock"){
        return "You win! Paper beats rock.";
    }else if(p=="scissors" && c=="Rock"){
        return "You lose! Rock beats scissors.";
    }else if(p=="scissors" && c=="Paper"){
        return "You win! Scissors beat paper.";
    }else{
        return "Draw!"
    }
}

function game(){
    let cpuScore = 0;
    let playerScore = 0;
    

    for(let i = 0; i < 5; i++){
        let playerPlay = prompt("What is your pick? (Rock, Paper, Scissors)");
        let round = playRound(playerPlay.toLowerCase(),computerPlay());
        if(round.charAt(4) == "w"){
            playerScore++;
        }else if(round.charAt(4) == "l"){
            cpuScore++;
        }
    }

    if(playerScore>cpuScore){
        return 'Congrats! You won. Your score: '+playerScore+', your opponent\'s: '+cpuScore+'.';
    }else if(playerScore<cpuScore){
        return 'You lost. Your score: '+playerScore+', your opponent\'s: '+cpuScore+'.';
    }else{
        return 'Draw';
    }

}

console.log(game());