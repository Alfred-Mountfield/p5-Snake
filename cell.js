

function Cell(i, j) {
  this.i = i;
  this.j = j;

  this.show = function(){
    var x = this.i*cellSideLength;
    var y = this.j*cellSideLength;
    line(x, y, x + cellSideLength, y);
    line(x + cellSideLength, y, x + cellSideLength, y + cellSideLength);
    line(x + cellSideLength, y + cellSideLength, x, y + cellSideLength);
    line(x, y +cellSideLength, x, y);
  }

  this.highlight = function(){
    push();
    var x = this.i*cellSideLength;
    var y = this.j*cellSideLength;
    noStroke();
    fill(0, 0, 255);
    rect(x, y, cellSideLength, cellSideLength);
    pop();
  }
}
