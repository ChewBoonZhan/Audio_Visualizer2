class Subtitle{

    constructor(){
        this.runtime_subtitle = 0;
        this.subtitle_index = 0;
        this.max_subtitle_length = subtitles.subtitles.length - 1;
        this.default_pos_x = window.innerWidth/2;
        this.default_pos_y = window.innerHeight/4*3;
        this.position_x = this.default_pos_x;
        this.position_y = this.default_pos_y;
        this.change_in_pos_x = 20;
        this.change_in_pos_y = 10;
        this.text_noise_x = new Perlin_Noise(0.01);
        this.text_noise_y = new Perlin_Noise(0.005);
        

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
                }
                
            }
        }

        fill("white");
        textSize(30);
        textAlign(CENTER);
        
        this.position_x = this.text_noise_x.get_noise(this.default_pos_x-this.change_in_pos_x,this.default_pos_x+this.change_in_pos_x);
        this.position_y = this.text_noise_y.get_noise(this.default_pos_y-this.change_in_pos_y,this.default_pos_y+this.change_in_pos_y);
        
        text(subtitles.subtitles[this.subtitle_index][1],this.position_x,this.position_y);

        
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

    }
    
}

