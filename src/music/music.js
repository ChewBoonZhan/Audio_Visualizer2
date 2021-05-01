class music {
  constructor() {
    this.subtitle1 = new Subtitle();
    this.show_subtitle = false;
  }
  init_music() {
    this.music = loadSound("../src/music/resources/love_somebody.mp3");
  }
  handle_pause_play() {
    
    if (this.music.isPlaying()) {
      
      this.music.stop();
      this.subtitle1.reset_runtime();
      this.show_subtitle = false;
      
    } else {
      
      this.music.play();
      this.show_subtitle = true;
      
    }
    //console.log(subtitle_music);
    
  }
  window_resized(){
    this.subtitle1.window_resized();
  }
  show_subtitle_fun(){
    if(this.show_subtitle){

      this.subtitle1.set_subtitle(this.get_runtime());

    }
    
  }
  get_runtime(){
    return this.music.currentTime();
  }
}
