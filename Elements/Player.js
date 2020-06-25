class Player {
    constructor(){
        this.player.width = 30;
        this.player.height = 30;
    }
    display(){
        var pos = this.player.position;
        this.player.position.x = mouseX;
        this.player.position.y = mouseY;
        rect(pos.x, pos.y, this.player.width, this.player.height);
    }
}