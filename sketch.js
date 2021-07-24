var boat ;
var stone ,wood;
var boatimg;
var backgroundimg;
var river,riverimg;

function preload() {
   boatimg=loadImage("boat.png");
   riverimg=loadImage("32443.jpg");
}
function setup() {
    createCanvas(1000,470);
    boat=createSprite(100,180);
    boat.addImage(boatimg);
    boat.scale=0.05
    

    river=createSprite(50,30,200,400);
    river.addImage(riverimg);
    river.scale=0.5;
    river.x=river.width/2;
    river.velocityX=-8;
  }
1
function draw() {

background("white");

if(river.x<0){
  river.x=river.width/2;
}




drawSprites();
}
 
