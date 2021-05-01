class music {
  constructor() {
    this.subtitle1 = new Subtitle();
    this.show_subtitle = false;
    this.subtitle_complete = true;
  }
  init_music() {
    this.music = loadSound("../src/music/resources/love_somebody.mp3");
  }
  handle_pause_play() {
    
    if (this.music.isPlaying()) {
      this.subtitle1.reset_runtime();
      this.show_subtitle = false;
      this.subtitle_complete = false;
      
      this.music.stop();
      
    } 
    else {
      this.show_subtitle = true;
      this.music.play();
      
    }
    
    
  }
  window_resized(){
    this.subtitle1.window_resized();
  }
  show_subtitle_fun(){
    if(this.show_subtitle){
      
      if(!this.subtitle_complete){
        if(this.get_runtime()<0.1){
          this.subtitle1.set_subtitle(0);
          this.subtitle_complete = true;
          
        }
        
      }
      else{
        this.subtitle1.set_subtitle(this.get_runtime());
      }
      

    }
    
  }
  get_runtime(){
    return this.music.currentTime();
  }
}
