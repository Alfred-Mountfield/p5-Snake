var w;
var h;
var targetNumberOfCells;
var remainder;
var cellSideLength;
var heightTotal;
var widthTotal;
var totalNumberOfCells;
var gridWidth;
var gridHeight;
var grid;
var snake;
var food;
var fr;
var frameCounter;
var score;
var points;
var gameOver;
var mouseClick;

function setup() {
  w = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  h = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  targetNumberOfCells = 800;

  remainder = (w*h)%targetNumberOfCells;
  cellSideLength = Math.floor(Math.sqrt((((w*h)-remainder)/targetNumberOfCells)));

  heightTotal = Math.floor(h/cellSideLength);
  widthTotal = Math.floor(w/cellSideLength);
  totalNumberOfCells = widthTotal*heightTotal;

  gridWidth = cellSideLength*widthTotal;
  gridHeight = cellSideLength*heightTotal;

  fr = 10;

  createCanvas(gridWidth, gridHeight);
  frameRate(fr);
  reset();
}

function reset() {
  gameOver = 0;
  grid = [];

  score = new Score();
  snake = new Snake();
  food = new Food();
  points = 0;

  for (i = 0; i < widthTotal; i++) {
    for (j = 0; j < heightTotal; j++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if(snake.dir != 'right') {
        snake.direction('left');
        }
  }
  if (keyCode === RIGHT_ARROW) {
    if(snake.dir != 'left') {
        snake.direction('right');
        }
  }
  if (keyCode === UP_ARROW) {
    if(snake.dir != 'down') {
        snake.direction('up');
        }
  }
  if (keyCode === DOWN_ARROW) {
    if(snake.dir != 'up') {
        snake.direction('down');
        }
  }
}

function mousePressed (){
  if (gameOver && mouseIsPressed) {
    reset();
  }
}

function gameOverScreen() {
  if (gameOver) {
    push();
    textSize(80);
    fill(253, 245, 230);
    text("Game Over :( \n Click to continue", w/3, h/2.5);
    pop();

  }
}

function randomCellNumber(axis) {
  if (axis == "x") {
    return ((Math.floor((Math.random()*widthTotal)))*cellSideLength);
  }
  else if (axis == "y") {
    return ((Math.floor((Math.random()*heightTotal)))*cellSideLength);
  }
}

function draw() {
  background(51);
  /*for (i = 0; i < grid.length ; i++) {
        grid[i].show();
  }*/

  gameOverScreen();
    if (!gameOver) {
      snake.show();
      food.show();
      score.show();
  }

}
