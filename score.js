function Score() {

  this.show = function(){
    push();
    textSize(30);
    fill(253, 245, 230);
    text("Score: " + points, 0, 0, cellSideLength*5, cellSideLength*2);
    pop();
  }


}
