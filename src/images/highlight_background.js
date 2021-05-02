class hightlight_background {
  calculate_image_ratio() {
    this.image_ratio =
      this.background_image.height / this.background_image.width;
  }
  init_image() {
    this.background_image = loadImage(
      "../src/images/resources/background.png"
    );
  }

  initialize_image_parameter() {
    this.full_width = window.innerWidth;
    this.full_height = window.innerHeight;
    this.optimal_width = this.background_image.width;
    while (this.optimal_width > this.full_width) {
      this.optimal_width--;
    }
    this.optimal_height = this.image_ratio * this.optimal_width;
    while (this.optimal_height > this.full_height) {
      this.optimal_width--;
      this.optimal_height = this.image_ratio * this.optimal_width;
    }
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
  }
  show_image() {
    imageMode(CENTER);
    image(
      this.background_image,
      this.x,
      this.y,
      this.optimal_width,
      this.optimal_height
    );
  }
  get_parameter() {
    let height_width = {
      width: this.optimal_width,
      height: this.optimal_height,
    };

    return height_width;
  }
}
