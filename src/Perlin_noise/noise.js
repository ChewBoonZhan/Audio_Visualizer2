class Perlin_Noise{
    constructor(noise_speed1){
        this.start_pos = Math.floor(Math.random()*1000);
        this.noise_speed = noise_speed1;
    }
    get_noise(min_pos,max_pos){
        
        this.start_pos +=this.noise_speed;
        return(map(noise(this.start_pos),0,1,min_pos,max_pos));

    }
}