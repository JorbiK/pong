window.onload = initialize;

const keys = [];

document.addEventListener('keydown', function(event) {
  keys[event.keyCode] = true;
});

document.addEventListener('keyup', function(event) {
  keys[event.keyCode] = false;
});

class Paddle {
  constructor (x, y, ctx, upKeyCode, downKeyCode, keys){
    this.width = 20;
    this.height = 100;
    this.y = y;
    this.x = x;
    this.ctx = ctx;
    this.upKeyCode = upKeyCode;
    this.downKeyCode = downKeyCode;
    this.keys = keys;
  }

  drawRectangle (){
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.stroke();
    this.ctx.closePath();
    if (this.keys[this.downKeyCode] && this.y + this.height <= this.ctx.canvas.clientHeight){
        this.y = this.y+3;
    }
    if (this.keys[this.upKeyCode] && this.y >= 0){
        this.y = this.y-3;
    }
  }
}

class Ball {
  constructor (x, y, ctx){
    this.x = x;
    this.y = y;
    this.ctx = ctx;
  }

  drawBall (){
    this.ctx.beginPath();
    this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}

let paddle1;
let paddle2;
let ball;
let canvas;
let ctx;
function initialize(){
  canvas = document.getElementById("game-canvas");
  ctx = canvas.getContext("2d");
  paddle1 = new Paddle(20, 20, ctx, 87, 83, keys);
  paddle2 = new Paddle(960, 20, ctx, 38, 40, keys);
  ball = new Ball(500, 300, ctx);
  setInterval(drawLine, 10);
}

function drawLine (){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  paddle1.drawRectangle();
  paddle2.drawRectangle();
  ball.drawBall();
}
