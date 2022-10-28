const canvas = document.getElementById('canvas');

const balls = [];

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
canvas.width = windowWidth
canvas.height = windowHeight;

function createBalls(amountOfBalls) {
    for(let i = 0; i < amountOfBalls; i++) {
        balls.push(new Ball());
    }
    console.log(balls);  
}

function drawBalls() {
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach(ball => {

        
        ctx.beginPath();
    ctx.arc(ball.startingPointX,
            ball.startingPointY,
            ball.radius,
            0,
            Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    moveBall(ball);
    }
    )
    }

    }
    function moveBall(ball) {
        if(ball.startingPointX >= windowWidth - ball.radius - ball.velocity) {
            ball.goingRight = false;
        }
        if(ball.startingPointX <= 0 + ball.radius + ball.velocity) {
            ball.goingRight = true;
        }
        if(ball.startingPointY <= 0 + ball.radius + ball.velocity) {
            ball.goingDown = false;
        }
        if(ball.startingPointY >= windowHeight - ball.radius - ball.velocity) {
            ball.goingDown = true;
        }
        if(ball.goingRight) {
            ball.startingPointX += ball.velocity;
        }
        if(!ball.goingRight) {
            ball.startingPointX -= ball.velocity;

        }
        if(ball.goingDown) {
            ball.startingPointY -= ball.velocity;
        }
        if(!ball.goingDown) {
            ball.startingPointY += ball.velocity;
        }

    }

    createBalls(100);

    setInterval(drawBalls, 50);
    









