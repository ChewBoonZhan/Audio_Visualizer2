class Subtitle{

    constructor(){
        this.runtime_subtitle = 0;
        this.subtitle_index = 0;
        this.max_subtitle_length = subtitles.subtitles.length - 1;
        this.default_pos_x = window.innerWidth/2;
        this.default_pos_y = window.innerHeight/4*3;
        this.position_x = this.default_pos_x;
        this.position_y = this.default_pos_y;
        this.changing_sub = false;
        this.color = color("white");
        this.alpha = 255;

    }

    set_subtitle(runtime){
        
        if (this.runtime_subtitle == 0){
            this.runtime_subtitle = subtitles.subtitles[this.subtitle_index][0];
        }
        else{
            if (runtime >= this.runtime_subtitle){
                if(this.subtitle_index < this.max_subtitle_length){
                    this.subtitle_index++;
                    this.runtime_subtitle = subtitles.subtitles[this.subtitle_index][0];

                    this.changing_sub = true;
                }
                
            }
        }
        push();
        translate(this.position_x,this.position_y);
        textSize(Math.floor(window.innerWidth/40));
        textAlign(CENTER);
        this.color = color("white");
        if(this.changing_sub){
            if(this.alpha >0){
                this.alpha -=17;
            }
            else{
                
                this.changing_sub = false;
            }
            this.color.setAlpha(this.alpha);
            fill(this.color);
        
            text(subtitles.subtitles[this.subtitle_index-1][1],0,0);    

        }
        else{
            if(this.alpha <255){
                this.alpha+=17;
            }
            this.color.setAlpha(this.alpha);
            fill(this.color);
        
            text(subtitles.subtitles[this.subtitle_index][1],0,0);    
        }
        
        pop();
        

        
    }
    window_resized(){
        this.default_pos_x = window.innerWidth/2;
        this.default_pos_y = window.innerHeight/4*3;

        this.position_x = this.default_pos_x;
        this.position_y = this.default_pos_y;

        
        
    }
    reset_runtime(){
        this.runtime_subtitle = 0;
        this.subtitle_index = 0;
        
        this.position_x = this.default_pos_x;
        this.position_y = this.default_pos_y;
        
        this.changing_sub = false;
        this.alpha = 255;
    }
    
}

