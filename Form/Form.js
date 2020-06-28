class Form {
    constructor(){
        this.playButton = createButton("Play");
        this.tutorialButton = createButton("Tutorial");
        this.title = createElement('h2');
    }
    display(){
        //Creating title and buttons
        textSize(100);
        this.title.html("Name");
        this.title.position(displayWidth/2+200, displayHeight/2-100);
        this.playButton.position(displayWidth/2+300, displayHeight/2-100);
        this.tutorialButton.position(displayWidth/2+300, displayHeight/2-70);
        //Choose difficulty
        this.playButton.mousePressed(()=>
        {
            this.playButton.hide();
            this.tutorialButton.hide();
            this.title.hide();
            gameState = 2;
        })
    }
}