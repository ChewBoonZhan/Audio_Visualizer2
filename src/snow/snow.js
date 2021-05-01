class Snow {
  constructor(image_param) {
    this.set_image_param(image_param);

    this.init_snow();
  }
  init_snow() {
    this.snows = [];
  }
  set_image_param(image_param) {
    this.image_param = image_param;
  }
  show() {
    if (Math.random() > 0.90) {
      this.snows.push(new snow_particle(this.image_param));
    }

    let length = this.snows.length;

    for (let i = 0; i < length; i++) {
      this.snows[i].show();
    }
    for (let i = length - 1; i >= 0; i--) {
      if (this.snows[i].check_off_screen()) {
        this.snows.splice(i, 1);
      }
    }
  }
}
