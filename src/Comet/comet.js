class comet{
    constructor(highlight_background){
        this.comet_size = window.innerWidth/100;
        this.comet_length = Math.floor(window.innerWidth/50);
        this.x = Math.floor(map(Math.random(),0,1,window.innerWidth/5,highlight_background['width']));
        this.y = window.innerHeight/2-highlight_background['height']/2;

        this.x_min = window.innerWidth/2-highlight_background['width']/2-30;
        
        
        this.color = color("#93a4bd");
        this.head_alpha = 255;
        
        this.pos_history_x = [];
        this.pos_history_y = [];

        this.comet_reduce_size_rate = this.comet_size/this.comet_length;
        this.comet_reduce_alpha_rate = this.head_alpha/this.comet_length;

        this.temp_alpha = 0;
        this.temp_comet_size = 0;
        this.speed = map(Math.random(),0,1,2,3);
        this.comet_showing = true;
    }
    update_position(){
        this.x -= 3;
        this.y +=0.7;
        
    }
    show(){
        if(this.comet_showing){
            
            push();
            this.color.setAlpha(this.head_alpha);
            fill(this.color);
            noStroke();
            
            this.update_position();

            this.update_pos_history(this.x,this.y);
            circle(this.x,this.y,this.comet_size);

            this.temp_comet_size = this.comet_size;
            this.temp_alpha = this.head_alpha;
            this.history_length = this.pos_history_x.length;

            for(this.i = this.history_length;this.i>0;this.i--){
                this.color = color("#93a4bd");
                this.temp_comet_size-=this.comet_reduce_size_rate;
                //this.temp_comet_size-=0.001;
                //this.temp_alpha-=0.001;
                this.temp_alpha-=this.comet_reduce_alpha_rate;
                this.color.setAlpha(this.temp_alpha);

                fill(this.color);

                circle(this.pos_history_x[this.i],this.pos_history_y[this.i],this.temp_comet_size);
            }
            
            pop();
            if(this.x <= this.x_min){
                this.comet_showing = false;
            }
        }
        
        
        
    }   
    get_is_comet_showing(){
        return this.comet_showing;
    }
    update_pos_history(new_x,new_y){
        this.pos_history_x.push(new_x);
        this.pos_history_y.push(new_y);

        if(this.pos_history_x.length>this.comet_length){
            this.pos_history_x.shift();
        }
        if(this.pos_history_y.length>this.comet_length){
            this.pos_history_y.shift();
        }
        
    }

}