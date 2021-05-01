class detect_amp {
  constructor() {
    this.fft = new p5.FFT(0.5, 512);
  }
  analyze_music_amps() {
    this.amps = this.fft.analyze();
    this.amps = this.amps.slice(1, music_data.amp_num_bins);
    this.total_amps = this.amps.reduce(function (a, b) {
      return a + b;
    });
  }
  get_amps() {
    return this.amps;
  }
  get_total_amps() {
    return this.total_amps;
  }
}
