function BodySegment() {

  this.x = 10000;
  this.y = 10000;
  this.position = 0;
  var scalar = 0.8;
  var snakeSideLength = cellSideLength * scalar;
  var offset = (cellSideLength - snakeSideLength)/2;

  this.show = function (position) {
    push();
    fill(0, 129 - 3*(position), 0);
    rect((offset + this.x), (offset + this.y), snakeSideLength, snakeSideLength);
    pop();
  }


  this.changePosition = function (x, y) {
    this.x = x;
    this.y = y;
  }
}
