var canvas;
var music;
var b1, b2, b3, b4, ball, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(820,600);

    //create 4 different surfaces
b1=createSprite(0,580,220,30);
b1.shapeColor="blue";

b2=createSprite(240,580,220,30);
b2.shapeColor="red";

b3=createSprite(480,580,220,30);
b3.shapeColor="green";

b4=createSprite(720,580,220,30);
b4.shapeColor="purple";
    //create box sprite and give velocity
    ball=createSprite(random(50,820),315,35,35);
ball.shapeColor="white";
ball.velocityX=5;
ball.velocityY=8;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges);


if(b1.isTouching(ball)&& ball.isTouching(b1)){
    ball.shapeColor="blue";
    music.play();
}
if(b2.isTouching(ball)&& ball.isTouching(b2)){
    ball.shapeColor="red";
    music.play();
}
if(b4.isTouching(ball)&& ball.isTouching(b4)){
    ball.shapeColor="purple";
    music.play();
}
if(b3.isTouching(ball)){
    ball.velocityX=0;
    ball.velocityY=0;
    ball.shapeColor="green";
    music.stop();
}
    //add condition to check if box touching surface and make it box
    drawSprites();
}
