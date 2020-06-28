class Game {
    constructor(){
        this.title = createElement('h2')
        this.reset = createButton("Reset")
        this.player = createSprite(100,100,20,20)
        this.pollutant = createSprite(random(0,displayWidth),random(0,displayHeight), 20, 20)
    }
    easy(){
         this.pollutant.mousePressed(()=>{
             levelMeter = levelMeter + 3
             exp += 1
             this.pollutant.position.x = random(0,displayWidth)
             this.pollutant.position.y = random(0,displayHeight)
             count += 1
         })
         if(levelMeter == 100){
            levelMeter = 0
            level = level+1
         }
         notClean = notClean + 1
         if(notClean == 6){
             this.pollutant.position.x = random(0,displayWidth)
             this.pollutant.position.y = random(0,displayHeight)
             exp -= 1
             levelMeter -= 2
             notClean = 0
         }
         drawSprites();
    }
    medium(){
         this.pollutant.mousePressed(()=>{
             levelMeter = levelMeter + 2
             exp += 1
             this.pollutant.position.x = random(0,displayWidth)
             this.pollutant.position.y = random(0,displayHeight)
             count += 1
         })
         if(levelMeter == 100){
            levelMeter = 0
         }
         notClean = notClean + 1
         if(notClean == 4){
             this.pollutant.position.x = random(0,displayWidth)
             this.pollutant.position.y = random(0,displayHeight)
             exp -= 2
             levelMeter -= 2
             notClean = 0
         }
         drawSprites();
    }
    hard(){
         this.pollutant.mousePressed(()=>{
             levelMeter = levelMeter + 3
             exp = exp + 3
             this.pollutant.position.x = random(0,displayWidth)
             this.pollutant.position.y = random(0,displayHeight)
             count += 1
         })
         if(levelMeter == 100){
            levelMeter = 0
         }
         notClean = notClean + 1
         if(notClean == 2){
             this.pollutant.position.x = random(0,displayWidth)
             this.pollutant.position.y = random(0,displayHeight)
             exp -= 3
             levelMeter -= 3
             notClean = 0
         }
         drawSprites();
    }
    end(){
        this.title.html = ("You earned "+exp+" experience and cleaned "+count+" this.pollutants")
        this.reset.mousePressed(()=>{
            count = 0
            gameState = 0
            levelMeter = 0
        })
    }
}