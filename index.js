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
    ctx.stroke();
    moveBall(ball);
    }
    )
    }

    }
    function moveBall(ball) {
        let goingRight = true;
        let goingDown = true;
        if(ball.startingPointX === windowWidth || !goingRight) {
            goingRight = false;
            ball.startingPointX -= 1;
        }
        else {
            ball.startingPointX += 1;
        }
        if(ball.startingPointY === windowHeight || !goingDown) {
            goingDown = false;
            ball.startingPointY -= 1;
        }
        else {
            ball.startingPointY += 1;
        }
    
        
        
    }

    createBalls(5);

    //setInterval(drawBalls, 100);
    
    
    // lav et loop som kører igennem balls
    // først tegn ballsene
    // kald en moveBall metode, som ændrer x og y med et lille tal, så kuglen rykker
    // kør den med et interval på 100 millisekunder eller noget i den stil









