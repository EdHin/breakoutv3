let x1 
let x2 
let x3 
let x4 
let x5 
let y

let speedX
let speedY

function setup() {
  createCanvas(1280, 720);
    x1 = 50
    x2 = 150
    x3 = 250
    x4 = 350
    x5 = 450
    y = 50
    speedX = 5
    speedY = 5
}

function draw() {

    background('blue');
  fill(255, 100, 255);

  ellipse(x1,y,80,80);
  ellipse(x2,y,80,80);
  ellipse(x3,y,80,80); 
  ellipse(x4,y,80,80);
  ellipse(x5,y,80,80);
    x1 = x1 + speedX;
    x2 = x2 + speedX;
    x3 = x3 + speedX;
    x4 = x4 + speedX;
    x5 = x5 + speedX;
    y = y + speedY;

    if (x1 + 25 == 1280 || x1 - 25 == 0) {
        speedX = -speedX 
    }
        if (x2 + 25 == 1280 || x2 - 25 == 0) {
        speedX = -speedX 
    }
        if (x3 + 25 == 1280 || x3 - 25 == 0) {
        speedX = -speedX 
    }
        if (x4 + 25 == 1280 || x4 - 25 == 0) {
        speedX = -speedX 
    }
        if (x5 + 25 == 1280 || x5 - 25 == 0) {
        speedX = -speedX 
    }
    
    if (y + 25== 720 || y - 25 == 0) {
        speedY = -speedY
    }
}