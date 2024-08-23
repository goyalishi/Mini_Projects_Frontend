
let randomNum= Math.floor(Math.random()*100 +1);

const inputEle = document.querySelector('.guessFeild');
const remaining = document.getElementById('lastResult');
const guessSlot = document.getElementById('prevGuess');
const submtEle = document.querySelector('.guessSubmit');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submtEle.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(inputEle.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // to check whether the given no is valid or not
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1){
        alert('Please enter a number more than 0');
    }
    else if(guess>100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess=== randomNum){
        displayMessage(`You guessed it right!`);
        endGame();
    }
    else if(guess<randomNum){
        displayMessage(`Number is too low`);
    }
    else if(guess>randomNum){
        displayMessage('Number is too high');
    }
}

function displayMessage(mssg){
    lowOrHi.innerHTML=`<h2>${mssg}</h2>`
}

function displayGuess(guess){
    inputEle.value='';
    guessSlot.innerHTML+=`${guess}  `;
    numGuess+=1;
    remaining.innerHTML=`${11-numGuess}`;
}

function endGame(){
    inputEle.value='';
    inputEle.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML= `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNum= Math.floor(Math.random()*100 +1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        inputEle.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
        lowOrHi.innerHTML=`<h2></h2>`
    })
}

