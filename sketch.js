var wall, bullet
var bulletSpeed,weight
var thickness



function setup() {
  createCanvas(800,400);
  backgroundColor="black"
  bulletSpeed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(200,200,20,3);
  bullet.shapeColor="white"
  wall=createSprite(600,200,thickness,60);
  wall.shapeColor="white"
}

function draw() {
  bullet.velocityX=bulletSpeed;

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0
    var damage=(0.5*weight*bulletSpeed*bulletSpeed)/(wall.width*wall.width*wall.width);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0)
    }

     if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }
  background(0);  
  drawSprites();
}