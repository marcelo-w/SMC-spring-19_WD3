var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var ballX = canvas.width / 2;
var ballY = canvas.height / 2;
var ballColor = 'rgb(220, 53, 69)';

var ballRadius = 120;

var speedX = 4;
var speedY = 2;
var moveRight = true;
var moveDown = true;

var redValue = Math.random() * 255;
var greenValue = Math.random() * 255;
var blueValue = Math.random() * 255;

var clickCounter = 0;

function animate() {
    context.fillStyle = 'rgba(203, 189, 226, 0.6)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    //draw ball
    context.beginPath();
    context.fillStyle = ballColor;
    context.strokeStyle = '#495057';
    context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    if (ballX + ballRadius >= canvas.width || (ballX - ballRadius <= 0)) {
        moveRight = !moveRight;
    }

    if (ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) {
        moveDown = !moveDown;
    }

    if (moveRight) {
        ballX = ballX + speedX;
    } else {
        ballX = ballX - speedX;
    }

    if (moveDown) {
        ballY = ballY + speedY;
    } else {
        ballY = ballY - speedY;
    }

    context.font = "30px Helvetica";
    context.textAlign = "center";
    context.fillStyle = "#333333";
    context.fillText("Score: " + clickCounter, canvas.width / 2, 40);

    window.requestAnimationFrame(animate);
}

animate();

// button functions

function changeSmall() {
    --ballRadius;
}

function changeColor() {
    ballColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
    // console.log(ballColor);
}

function changeBig() {
    ++ballRadius;
}

// ball mouse click event

canvas.addEventListener('click', function (event) {
    // find absolute value of click distance from ball

    var distX = Math.abs(ballX - event.clientX);
    var distY = Math.abs(ballY - event.clientY);
    

    if (distX < ballRadius && distY < ballRadius) {
        console.log('Score!');
        ballColor = 'orange';
        ++clickCounter;
        ++speedX;
        ++speedY;
        console.log(clickCounter);
    }
})

