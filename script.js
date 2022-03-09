/*rock paper scissors game*/

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
let div = document.querySelector("#ris");
let para = document.createElement("p"); 

rock.addEventListener('click', function(){ playRound("rock")});
paper.addEventListener('click', function(){playRound("paper")});
scissors.addEventListener('click', function(){playRound("scissors")});

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

console.log(computerPlay());

function playRound(player){
    
    let p = player;
    let c = computerPlay();
    console.log(p);
    console.log(c);
    if(p=="rock" && c=="Paper"){
        para.textContent = "You lose! Paper beats rock.";
        left.style.backgroundColor = "red";
        right.style.backgroundColor = "green";
        
    }else if(p=="rock" && c=="Scissors"){
        para.textContent = "You win! Rock beats scissors.";
        left.style.backgroundColor = "green";
        right.style.backgroundColor = "red";
    }else if(p=="paper" && c=="Scissors"){
        para.textContent = "You lose! Scissors beat paper.";
        left.style.backgroundColor = "red";
        right.style.backgroundColor = "green";
    }else if(p=="paper" && c=="Rock"){
        para.textContent = "You win! Paper beats rock.";
        left.style.backgroundColor = "green";
        right.style.backgroundColor = "red";
    }else if(p=="scissors" && c=="Rock"){
        para.textContent = "You lose! Rock beats scissors.";
        left.style.backgroundColor = "red";
        right.style.backgroundColor = "green";
    }else if(p=="scissors" && c=="Paper"){
        para.textContent = "You win! Scissors beat paper.";
        left.style.backgroundColor = "green";
        right.style.backgroundColor = "red";
    }else{
        para.textContent = "Draw!"
        left.style.backgroundColor = "lightblue";
        right.style.backgroundColor = "lightblue";
    }

    div.appendChild(para);

// function game(){
//     let cpuScore = 0;
//     let playerScore = 0;
    

//     for(let i = 0; i < 5; i++){
//         let playerPlay = prompt("What is your pick? (Rock, Paper, Scissors)");
//         let round = playRound(playerPlay.toLowerCase(),computerPlay());
//         if(round.charAt(4) == "w"){
//             playerScore++;
//         }else if(round.charAt(4) == "l"){
//             cpuScore++;
//         }
//     }

//     if(playerScore>cpuScore){
//         return 'Congrats! You won. Your score: '+playerScore+', your opponent\'s: '+cpuScore+'.';
//     }else if(playerScore<cpuScore){
//         return 'You lost. Your score: '+playerScore+', your opponent\'s: '+cpuScore+'.';
//     }else{
//         return 'Draw';
//     }

}
