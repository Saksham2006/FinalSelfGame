class Level{
    constructor(){
        this.level = 1;
        this.exp = 0;
    }
    levelUp(){
        for(var i=1;i<=10;i=i+1){
            if(this.level == i && this.exp == 50*i){
                this.level += 1;
                this.exp = 0;
            }
        }
    }
}