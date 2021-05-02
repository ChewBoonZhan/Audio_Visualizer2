class star_collection{
    constructor(background_image_parameter){
        this.height_center = window.innerHeight/2;
        this.width_center = window.innerWidth/2;
        this.background_image_start_width = this.width_center-(background_image_parameter['width']/2)+window.innerWidth/40;
        this.background_image_end_width = this.width_center+(background_image_parameter['width']/2) -window.innerWidth/40;
        
        this.background_image_start_height = this.height_center-(background_image_parameter['height']/2)+window.innerWidth/40;
        this.background_image_end_height = window.innerHeight/3-window.innerWidth/40;

        this.number_of_stars = 5;
        this.star_y_limit = window.innerHeight/2;
        
        this.init_star_collection();
    }
    init_star_collection(){
        this.star_collection_arr = [];
        for(this.i = 0;this.i<this.number_of_stars;this.i++){
        
            this.star_collection_arr.push(new star_particle(this.background_image_start_width,this.background_image_end_width,this.background_image_start_height,this.background_image_end_height));
        }
    }
    window_resized(background_image_parameter){
        this.background_image_start_width = this.width_center-(background_image_parameter['width']/2)+window.innerWidth/40;
        this.background_image_end_width = this.width_center+(background_image_parameter['width']/2) -window.innerWidth/40;
        
        this.background_image_start_height = this.height_center-(background_image_parameter['height']/2)+window.innerWidth/40;
        this.background_image_end_height = window.innerHeight/3-window.innerWidth/40;
        this.init_star_collection();
    }
    show(){
        for(this.i = 0;this.i<this.number_of_stars;this.i++){
            this.star_collection_arr[this.i].show();
        }
    }

}