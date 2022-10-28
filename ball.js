class Ball {
constructor() {
    this.radius = this.getRandomRadius();
    this.startingPointX = this.getRandomStartingPointX();
    this.startingPointY = this.getRandomStartingPointY();
    this.goingDown = this.getVerticalDirection();
    this.goingRight = this.getHorizontalDirection();
    this.velocity = this.getRandomVelocity();
    this.color = this.getRandomColor();
}


getRandomRadius() {
    return Math.floor(Math.random() * 30 + 5)
}

getRandomStartingPointX() {
    return Math.floor(Math.random() * windowWidth + 1);
}

getRandomStartingPointY() {
    return Math.floor(Math.random() * windowHeight + 1);
}

getVerticalDirection() {
    let randomNumber = Math.floor(Math.random * 2 + 1);
    if (randomNumber === 1) {
        return true
    }
    else {
        return false;
    }
}
getHorizontalDirection() {
    let randomNumber = Math.floor(Math.random() * 2 + 1);
    if (randomNumber === 1) {
        return true
    }
    else {
        return false;
    }
    
}
getRandomVelocity() {
    return Math.floor(Math.random() * 15 + 3);
}
getRandomColor() {
    return `rgba(${Math.random() * 256},
                ${Math.random() * 256},
                ${Math.random() * 256},
                ${Math.random()}
                )`
}
}

