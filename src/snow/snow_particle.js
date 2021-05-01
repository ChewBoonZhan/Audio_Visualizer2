class snow_particle {
  constructor(image_param) {
    this.init_snow_limit(image_param);
    this.init_x_and_y();
    this.init_vel();
    this.size = random(1, 30);
    this.alpha = map(this.size, 1, 30, 255, 0);
    this.colour = color("white");
    this.colour.setAlpha(this.alpha);
  }
  init_snow_limit(image_param) {
    this.start_x = window.innerWidth / 2 - image_param["width"] / 2;
    this.end_x = window.innerWidth / 2 + image_param["width"] / 2;
    this.start_y = window.innerHeight / 2 - image_param["height"] / 2;
    this.end_y = window.innerHeight / 2 + image_param["height"] / 2;
  }
  init_x_and_y() {
    let x = random(this.start_x, this.end_x);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
  }
  init_vel() {
    this.vel = createVector(0, 0.1);
  }
  show() {
    push();
    fill(this.colour);
    noStroke();
    circle(this.pos.x, this.pos.y, this.size);
    pop();
    this.update();
  }
  update() {
    this.vel.add(gravity);
    this.vel.limit(this.size * 0.1);
    this.pos.add(this.vel);
  }
  check_off_screen() {
    return this.pos.y > this.end_y;
  }
}
