var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context; 
var snakeHaedX = blockSize * 5;
var snakeHaedY = blockSize * 5;
var speedX = 0;
var speedY = 0;
var snakeLength = [];
var appleX;
var appleY;
var gameOver = false;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");
    moveFood();
    document.addEventListener("keyup", moveTheSnake);
    setInterval(play, 1000/10);
}

function calculateApple() {

}
function moveFood() {
    appleX = Math.floor(Math.random() * cols) * blockSize;
    appleY = Math.floor(Math.random() * rows) * blockSize;
}

function play() {
    if (gameOver) {
        return;
    }

    context.fillStyle="#F8F9F9";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="#D7BDE2 ";
    context.fillRect(appleX, appleY, blockSize, blockSize);

    if (snakeHaedX == appleX && snakeHaedY == appleY) {
        snakeLength.push([appleX, appleY]);
        moveFood();
    }

    for (let i = snakeLength.length-1; i > 0; i--) {
        snakeLength[i] = snakeLength[i-1];
    }
    if (snakeLength.length) {
        snakeLength[0] = [snakeHaedX, snakeHaedY];
    }

    context.fillStyle="#82E0AA";
    snakeHaedX += speedX * blockSize;
    snakeHaedY += speedY * blockSize;
    context.fillRect(snakeHaedX, snakeHaedY, blockSize, blockSize);
    for (let i = 0; i < snakeLength.length; i++) {
        context.fillRect(snakeLength[i][0], snakeLength[i][1], blockSize, blockSize);
    }

    if (snakeHaedX < 0 || snakeHaedX > cols*blockSize || snakeHaedY < 0 || snakeHaedY > rows*blockSize) {
        gameOver = true;
        alert("Perdu ! Vous avez mangé " + snakeLength.length + " pommes !");
        window.location.reload();
    }

    for (let i = 0; i < snakeLength.length; i++) {
        if (snakeHaedX == snakeLength[i][0] && snakeHaedY == snakeLength[i][1]) {
            gameOver = true;
            alert("Perdu ! Vous avez mangé " + snakeLength.length + " pommes !");
            window.location.reload();
        }
    }
}

function moveTheSnake(e) {
    if (e.code == "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
    }
    else if (e.code == "ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
    }
    else if (e.code == "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
    }
    else if (e.code == "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
    }
}