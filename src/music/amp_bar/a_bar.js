class a_bar {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
  }

  show(height) {
    fill("#FFC000");
    stroke("black");
    strokeWeight(1);
    rectMode(CORNER);
    rect(this.x, this.y, this.width, -height);

    //x = 1.20
    //y = 38.88
  }
}
