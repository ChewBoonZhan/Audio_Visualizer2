class comet_handler{
    constructor(highlight_background){
        this.comets = [];
        this.highlight_background = highlight_background;
    }
    show(){
        
        if(Math.random()>0.9985){
            this.comets.push(new comet(this.highlight_background));
        }
        this.length = this.comets.length;
        for(this.i = 0;this.i<this.length;this.i++){
            if(!this.comets[this.i].get_is_comet_showing()){
                
                this.comets.shift();
                break;
            }
            else{
                break;
            }
         }
         this.length = this.comets.length;
        for(this.i = 0;this.i<this.length;this.i++){
           this.comets[this.i].show();
        }
    }
    window_resized(highlight_background){
        this.comets = [];
        this.highlight_background = highlight_background;
    }
}