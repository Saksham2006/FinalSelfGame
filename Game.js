class Game {
    constructor(){
        this.title = createElement('h2');
        this.reset = createButton("Reset");
    }
    easy(){
         player = new Player();
         pollutant = new Pollution(random(0,displayWidth),random(0,displayHeight, 20, 20));
         if(pollutant.mousePressed(()=>{
             levelMeter = levelMeter + 3;
             exp += 1;
             pollutant.position.x = random(0,displayWidth);
             pollutant.position.y = random(0,displayHeight);
             count += 1;
         }))
         if(levelMeter == 100){
            levelMeter = 0;
            level = level+1;
         }
         notClean = notClean + 1;
         if(notClean == 6){
             pollutant.position.x = random(0,displayWidth);
             pollutant.position.y = random(0,displayHeight);
             exp -= 1;
             levelMeter -= 2;
             notClean = 0;
         }
    }
    medium(){
        player = new Player();
         pollutant = new Pollution(random(0,displayWidth),random(0,displayHeight, 20, 20));
         pollutant.mousePressed(()=>{
             levelMeter = levelMeter + 2;
             exp += 1;
             pollutant.position.x = random(0,displayWidth);
             pollutant.position.y = random(0,displayHeight);
             count += 1;
         });
         if(levelMeter == 100){
            levelMeter = 0;
         }
         notClean = notClean + 1;
         if(notClean == 4){
             pollutant.position.x = random(0,displayWidth);
             pollutant.position.y = random(0,displayHeight);
             exp -= 2;
             levelMeter -= 2;
             notClean = 0;
         }
    }
    hard(){
        player = new Player();
         pollutant = new Pollution(random(0,displayWidth),random(0,displayHeight, 20, 20));
         if(pollutant.mousePressed(()=>{
             levelMeter = levelMeter + 3;
             exp = exp + 3;
             pollutant.position.x = random(0,displayWidth);
             pollutant.position.y = random(0,displayHeight);
             count += 1;
         }))
         if(levelMeter == 100){
            levelMeter = 0;
         }
         notClean = notClean + 1;
         if(notClean == 2){
             pollutant.position.x = random(0,displayWidth);
             pollutant.position.y = random(0,displayHeight);
             exp -= 3;
             levelMeter -= 3;
             notClean = 0;
         }
    }
    end(){
        this.title.html = ("You earned "+exp+" experience and cleaned "+count+" pollutants");
        this.reset.mousePressed(()=>{
            count = 0;
            gameState = 0;
            levelMeter = 0;
             = 0;
        });
    }
}