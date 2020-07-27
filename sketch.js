var car,wall;
var speed, weight;

function setup() {
  speed=random(55,90)
  weight=random(400,1500)

  var canvas = createCanvas(400, 400);
 car=createSprite(50,200, 50,50);
  wall=createSprite(1500, 200, 60, height/2);
}

function draw() {
  background("black");  
  car.velocityX = 3;
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor="green"
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor="yellow"
    }

    if(deformation<100)
    {
      car.shapeColor="red"
    }

  }
  function hasCollided(Lbullet,Lwall)
  {
    bulletRightEdge=Lbullet.x +Lbullet.width;
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;

      if(hasCollided(bullet, wall))
    {
      bullet.velocityX=0;
      var damage=0.5 * weight * speed* speed/(thicKness *thicKness);

    }
    if(damage<10)
    {
      wall.shapeColor="green"
    }
    if(damage<10)
    {
      wall.shapeColor="red"
    }
  }
  drawSprites();
}