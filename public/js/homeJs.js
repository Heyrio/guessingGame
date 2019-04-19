const card = document.querySelectorAll('.card');
const reset = document.querySelector('button');
var ptn = document.getElementById("ptn")

// A player clicks and a card fades away also the main game logic

function playerClick(){
    resetBtn();
    randomBomb();
    var playerScore = 0;
for(var i =0; i< card.length; i++){
    card[i].addEventListener('click',function(){
        this.classList.remove("card");
        playerScore =  score(playerScore);
        if(playerScore == 170){
            win();
        }
     
        })
    }
}

//Reset button refreshes the page

function resetBtn(){
    reset.addEventListener('click', ()=>{
        location.reload(true)
    })
}

// Keeps track of the player score
function score(playerScore){
    playerScore = playerScore + 10;
    ptn.innerHTML = playerScore;
    return playerScore
}

// Removes all classes and displays and alert message that you won
function win(){
    for(var i =0; i< card.length; i++){
            card[i].classList.remove("card");
        }
        setTimeout(()=>{
           window.location.href = 'http://localhost:3000/winner'
        },250);
}

// generates a card with a random bomb class
function randomBomb(){
    var dice = Math.floor((Math.random() * 18) + 1);
    const cardArr = ['cd1','cd2','cd3','cd4','cd5','cd6',
                    'cd7','cd8','cd9','cd10','cd11','cd12',
                    'cd13','cd14','cd15','cd16']
        var bomb = document.getElementById(cardArr[dice]);

        bomb.addEventListener('click', ()=>{
            bomb.classList.remove('card');
            bomb.classList.add('bomb');
            setTimeout(()=>{
                die(bomb);
            },350)
        })
}

//When a player is killed by the bomb
function die(bomb){
    for(var i =0; i< card.length; i++){
        card[i].classList.remove("card");
    }
    alert('You Lose');
    
}


// starts the entire game logic
playerClick();