function Food () {
this.x = 5*cellSideLength;
this.y = 5*cellSideLength;
var dir;


  this.show = function (){
      push();
      fill(51, 224, 172);
      ellipse(this.x+cellSideLength/2, this.y+cellSideLength/2, cellSideLength*0.7, cellSideLength*0.7);
      pop();
      this.eaten();
  }

  this.eaten = function (){
    if (this.x == snake.x && this.y == snake.y) {
      this.x = (randomCellNumber("x"));
      this.y = (randomCellNumber("y"));
    }
  }




}
