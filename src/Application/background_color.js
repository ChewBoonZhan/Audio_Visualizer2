class background_color {
  constructor(image_param) {
    this.init_rectangle_dim(image_param);
    this.colour = color("white");
  }
  init_rectangle_dim(image_param) {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.width = image_param["width"];
    this.height = image_param["height"];
  }
  show(total_amp) {
    if (total_amp < music_data.bin_value_limit) {
      this.colour.setAlpha(
        map(total_amp, 0, music_data.total_bin_value, 0, 310)
      );
      fill(this.colour);
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
    }
  }
}
