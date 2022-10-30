
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
canvas.width = windowWidth
canvas.height = windowHeight;

const balls = [];

function createBalls(amountOfBalls) {
    for(let i = 0; i < amountOfBalls; i++) {
        balls.push(new Ball());
    }
}

function drawBalls() {
    updateCanvas();
    
    balls.forEach(ball => {
        drawBall(ball);
    });
        
    requestAnimationFrame(drawBalls);
    }

    function drawBall(ball) {
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
    function updateCanvas() {
        if (windowWidth != window.innerWidth || windowHeight != window.innerHeight) {
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
            canvas.width = windowWidth;
            canvas.height = windowHeight;
          }
          
          ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    createBalls(100);

    drawBalls();
    









