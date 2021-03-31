var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(223,321);
  weight = random(30,52);
  thikncess = random(22,83)

 car = createSprite(50,200,50,50);
 car.velocityX = speed;
 wall = createSprite(1200,200,thickness,height/2); 
}

function draw() {
  background(255,255,255);  

if(wall.x-car.x < (car.width + wall.width)/2){
  car.velocityX = 0;
    var deformation = 0.5* weight* speed* speed/22500;
    if(deformation > 180){
      car.shapeColor = color("green");
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color("yellow");
    }
    if(deformation < 100){
      car.shapeColor = color("red");
    }
}


  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lwall.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}
  
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5* weight* speed* spped/(thickness* thickness* thickness);

  if(damage > 10){
    wall.shapeColor = color("red");
  }
  if(damage < 10){
    wall.shapeColor = color("green");
  }
}
