class amp_bars {
  constructor(image_param) {
    this.num_of_bars = 4;
    this.width = 20;
    this.max_height = 40;
    this.init_x_and_y(image_param);
  }
  init_x_and_y(image_param) {
    this.x =
      window.innerWidth / 2 -
      image_param["width"] / 2 +
      image_param["width"] / 1.2;
    this.y =
      window.innerHeight / 2 -
      image_param["height"] / 2 +
      image_param["height"] / 1.02;
    this.init_bars();
  }
  init_bars() {
    this.bars = [];
    for (let i = 0; i < this.num_of_bars; i++) {
      this.bars.push(new a_bar(this.x + this.width * i, this.y, this.width));
    }
  }

  show(amp_array) {
    let length = this.bars.length;

    let amp_array_bound = floor(music_data.amp_num_bins / 9);
    let height_array = [];
    for (let i = 0; i < length / 2; i++) {
      let amp_array_temp = amp_array.slice(
        amp_array_bound * i,
        amp_array_bound + amp_array_bound * i
      );
      let amp_array_total = amp_array_temp.reduce(function (a, b) {
        return a + b;
      });

      let height = map(
        amp_array_total,
        0,
        amp_array_bound * 255,
        1,
        this.max_height
      );
      height_array.push(height);
      this.bars[i].show(height);
    }
    let j = 3;
    for (let i = 0; i < height_array.length; i++) {
      this.bars[j].show(height_array[i]);
      j--;
    }
  }
}
