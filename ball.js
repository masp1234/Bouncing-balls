class Ball {
constructor() {
    this.radius = this.getRandomRadius();
    this.startingPointX = this.getRandomStartingPointX();
    this.startingPointY = this.getRandomStartingPointY();
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
}

