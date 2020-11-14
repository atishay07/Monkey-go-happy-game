
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 200);
monkey=createSprite(80,5,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.11;
  
 ground = createSprite(200,180,1200,20);
ground.velocityX=-4;
ground.x=ground.width /2;
console.log(ground.x);
  
bananaGroup = new Group();
obstacleGroup = new Group();
  
 monkey.setCollider("circle",-70,110,170);
 monkey.debug = false

  
survivaltime=0;
}


function draw() {

  background(255);
  text("survivaltime: "+ survivaltime , 500,50);
   survivaltime= survivaltime + Math.round(frameCount/60);
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY=-12 ;
  }
  monkey.velocityY=monkey.velocityY + 1.5 ;
  
  monkey.collide(ground);
  
if(obstacleGroup.isTouching(monkey)){
  monkey.velocity=0;
}
  
  spawnbanana();
  
  spawnobstacle();
  
  drawSprites();
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var  banana = createSprite(600,120,80,10);
     banana.y = Math.round(random(10,30));
     banana.addImage( bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -4;
    
     //assign lifetime to the variable
     banana.lifetime = 200;
    
    //adjust the depth
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}
function spawnobstacle() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacle=createSprite(400,165,10,40);
     obstacle.y = Math.round(random(152,152));
     obstacle.addImage( obstacleImage);
     obstacle.scale = 0.1;
     obstacle.velocityX = -6;
    
     //assign lifetime to the variable
     obstacle.lifetime = 200;
    
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}





