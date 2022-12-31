console.log("welcome to TicTacToe")
let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let isGameover = false;

let player = "X";

// music.play();

// Fuction to change the turn
const changeTurn = ()=>{
    return player === "X" ? "0" : "X"
}

// Fuction to check the win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]

    wins.forEach(element =>{
        if((boxtext[element[0]].innerText === boxtext[element[1]].innerText) && (boxtext[element[0]].innerText === boxtext[element[2]].innerText) && boxtext[element[0]].innerText !== ''){
            document.querySelector('.info').innerText = boxtext[element[0]].innerText + " won!!!"
            isGameover = true;
            gameOver.play();
            document.querySelector('.img-container').getElementsByTagName('img')[0].style.width = "120px";
            document.querySelector('.line').style.width = '20vw';
            document.querySelector('.line').style.transform = `translate(${element[3]}vw, ${element[4]}vw) rotate(${element[5]}deg)`;
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = player;
            player = changeTurn();
            turn.play();
            checkWin();
            if(!isGameover){
                document.querySelector('.info').getElementsByTagName('big')[0].innerText = player;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    document.querySelector('.line').style.width = '0vw';
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element => {
        element.innerText = '';
    });
    player = 'X';
    isGameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + player;
    document.querySelector('.img-container').getElementsByTagName('img')[0].style.width = "0px";
})