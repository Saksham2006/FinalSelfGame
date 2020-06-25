class Pollution {
    constructor(){
        
    }
    display(){
        var pos = this.pollutant.position;
        rect(pos.x, pos.y, this.pollutant.width, this.pollutant.height);
        
    }
}