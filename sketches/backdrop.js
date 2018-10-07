class Backdrop {
    constructor(){
        this.gridCount = 25;
    }

    draw(){
        background(0);
        colorMode(HSB);
        for (var i = 0; i < width; i += this.gridCount) {
			
            stroke(map(i, 0, width, 0, 255), 50, 50, 0.0001)
            strokeWeight(1)
            line(i, height, i, 0);
                
            stroke(map(i, 0, width, 0, 255), 50, 50, 0.00005)
            strokeWeight(0.25)
            line(i, height, i, 0);
        }
        
        for (var i = 0; i < height; i += this.gridCount) {
                
            stroke(map(i, 0, height, 0, 255), 50, 50, 0.0001)
            strokeWeight(1)
            line(width, i, 0, i);
                
            stroke(map(i, 0, height, 0, 255), 50, 50, 0.00005)
            strokeWeight(0.25)
            line(width, i, 0, i);
        }
    }
}