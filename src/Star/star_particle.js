class star_particle{
    constructor(background_image_start_width,background_image_end_width,background_image_start_height,background_image_end_height){
        this.size_min = window.innerWidth/60;
        this.size_max = window.innerWidth/40;

        this.background_image_start_width = background_image_start_width;
        this.background_image_end_width = background_image_end_width;

        this.background_image_start_height = background_image_start_height;
        this.background_image_end_height = background_image_end_height;

        

        //this.perlin_speed = map(Math.random(),0,1,0.01,0.001);
        this.perlin_speed = 0.01;
        this.color = color("white");
        this.noise = new Sin_Noise(this.perlin_speed);
        this.size = Math.floor(map(Math.random(),0,1,this.size_min,this.size_max));
        this.star_position_ready = true;
        this.star_brightness_ready = true;
        this.min_brightness = 20;
        this.brightness_ready = 60;
        this.max_brightness = 110;
        this.init_position();
    }
    init_position(){
        this.x = map(Math.random(),0,1,this.background_image_start_width,this.background_image_end_width);
        this.y = map(Math.random(),0,1,this.background_image_start_height,this.background_image_end_height);
    }
    show(){
        
        this.alpha = this.noise.get_noise(this.min_brightness,this.max_brightness);
        //console.log(this.alpha);
        if(this.star_position_ready){
            push();
            if(this.star_brightness_ready){
                if(Math.floor(this.alpha) <=this.min_brightness){
                    this.star_position_ready = false;
                }
            }
            else if(this.alpha>=this.brightness_ready){
                this.star_brightness_ready = true;
            }

            this.color.setAlpha(this.alpha);
            fill(this.color);
            noStroke();
            ellipse(this.x, this.y, this.size, this.size/5);
            ellipse(this.x, this.y, this.size/5, this.size);
            pop();
        }
        else{
            this.init_position();
            this.star_position_ready = true;
            this.star_brightness_ready = false;
        }
        
    }
}