function Snake() {
  this.x = randomCellNumber("x");
  this.y = randomCellNumber("y");
  this.length = 1;
  this.continuous = true;
  var dir;
  var scalar = 0.8;
  var snakeSideLength = cellSideLength * scalar;
  var offset = (cellSideLength - snakeSideLength)/2;
  this.body = [new BodySegment()];


  this.show = function(){
    for (i = 0; i < this.length; i++) {
      this.body[i].show(i);
    }
    //controllable head without body
    /*push();
    fill(0, 129, 0);
    rect((offset + this.x), (offset + this.y), snakeSideLength, snakeSideLength); */
    this.move();
    this.outOfBounds();
    this.eat();
    this.checkContact();
    pop();
  }

  //determining direction or non-continuous movement
  this.direction = function(input){
    if (this.continuous == true) {
      this.dir = input;
      }
    else {
      if (input == 'left'){
        this.x -= cellSideLength;
      }

      if (input == 'right'){
        this.x += cellSideLength;
      }

      if (input == 'up'){
        this.y -= cellSideLength;
      }

      if (input == 'down'){
        this.y += cellSideLength;
      }
    }
  }

  this.move = function() {
    //cycle through array from the end and set each segment's position to the position of the one next in the array
    for (i = this.body.length - 1; i > 0; i--) {
      this.body[i].changePosition(this.body[i-1].x, this.body[i-1].y);
    }
    switch(this.dir) {
      case 'left':
        this.x -= cellSideLength;
        break;

      case 'right':
        this.x += cellSideLength;
        break;

      case 'up':
        this.y -= cellSideLength;
        break;

      case 'down':
        this.y += cellSideLength;
        break;

      default:
        break;
    }

    this.body[0].changePosition(this.x, this.y);
  }

  // reset position if out of grid
  this.outOfBounds = function() {
    if (this.x < 0) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = 0;
    }

    if (this.x > cellSideLength*(widthTotal - 1)) {
      this.x = cellSideLength*(widthTotal - 1);
    }

    if (this.y > cellSideLength*(heightTotal - 1)) {
      this.y = cellSideLength*(heightTotal - 1);
    }
  }

  this.eat = function() {
    if (this.x == food.x && this.y == food.y) {
        this.length += 1 ;
        this.body.push(new BodySegment());
        points += 1;
      }
  }

  this.checkContact = function() {
    for (i = 1; i < this.body.length; i++) {
      if (this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y) {
        gameOver = 1;
      }
    }
  }
}
