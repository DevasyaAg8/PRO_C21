var bullet,wall,speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
 speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet =createSprite(50,200,50,25);
  wall =createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
bullet.shapeColor="white";
wall.shapeColor=color(85,85,85);
bullet.velocityX=speed;

}

function draw() {
  background(255,255,255); 
  if (hascollided(bullet,wall)){
    bullet.velocityX=0;
    var DAMAGE=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if(DAMAGE > 10)
    {
      wall.shapeColor="red";
    }
    if (DAMAGE<10){
      wall.shapeColor="green";
    }
  }
  
  
 
 
  
    drawSprites();
  }
  
 
function hascollided(lbullet,lwall){
  bulletrightedge=lbullet.x  + lbullet.width
  wallleftedge=lwall.x;
  if (bulletrightedge>=wallleftedge){
    return true;
  }
  return false;
}

                                                                                                                                                                                                                      
