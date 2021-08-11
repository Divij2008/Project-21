var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(0,580,360,30);
block1.shapeColor = "Red";
block2 = createSprite(300,580,180,30);
block2.shapeColor = "blue";
block3 = createSprite(515,580,180,30);
block3.shapeColor = "green";
block4 = createSprite(720,580,180,30)
block4.shapeColor = "yellow";
ball = createSprite(random(20,750),100, 40,40); 
ball.shapeColor = rgb(255,255,255);

 ball.velocityX = 4; ball.velocityY = 9;



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
   edges = createEdgeSprites();
    ball.bounceOff(edges);
drawSprites();


    //add condition to check if box touching surface and make it box
    if(ball.isTouching(block1)&& ball.bounceOff(block1)){
ball.shapeColor = "Red";
music.play();
    }
    if(ball.isTouching(block2)&& ball.bounceOff(block2)){
        ball.shapeColor = "blue";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if(ball.isTouching(block3)&& ball.bounceOff(block3)){
        ball.shapeColor = "green"
    }
    if(ball.isTouching(block4)&& ball.bounceOff(block4)){
        ball.shapeColor = "yellow"
    }
}
