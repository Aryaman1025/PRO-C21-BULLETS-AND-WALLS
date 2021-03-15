var bullet, wall,thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet = createSprite(50,200,50,20)
  bullet.shapeColor=color(255,255,255);

  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0); 
  
  if (bullet.isTouching(wall))
  {
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      bullet.shapeColor=color(225,0,0);
    }

    if(damage<10)
    {
      bullet.shapeColor=color(0,255,0);
    }
  }

  bullet.collide(wall)

  drawSprites();
}

/*function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdgge=lwall.x

  if(bulletRightEdge>=wallLetEdge)
  {

       return true
  }
  return false;
}*/