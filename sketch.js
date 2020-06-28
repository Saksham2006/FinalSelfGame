var engine, world;
var gameState = 0;
var difficulty, player, game, pollutant, cleanMeter;
var DiffBG, MainBG, bg;
var exp, cleanMeter, notClean, count, level;
var form;

function preload(){
    DiffBG = loadImage("Images/DifficultyBG.jpg");
    MainBG = loadImage("Images/MainBG.jpg");
}

function setup(){
 var canvas = createCanvas(displayWidth, displayHeight);
 //bg = MainBG;
 form = new Form();
 game = new Game();
}

function draw(){
 background(255);
 /*if(gameState == 0){
     bg = MainBG;
 }
 else {
     bg = DiffBG;
 }*/
 if(gameState == 2){
     game.easy();
 }
 if(gameState == 3){
     game.medium();
 }
 if(gameState == 4){
     game.hard();
 }
 if(gameState == "end"){
     game.end();
 }
 form.display();
}