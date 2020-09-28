var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
    
  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,height/2)
  //car.debug = true;

}

function draw() {
  background(0,0,0);  

  car.velocityX = speed;

  if(wall.x-car.x <(car.width + wall.width)/2)
    {
      car.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed/22509;
      if(deformation > 180)
         {
           car.shapeColor = color(255,0,0)
           //Text("Vehicle Is LETHAL",800,200)
         }

       if(deformation < 180 && deformation > 100)
         {
           car.shapeColor = color(230,230,0)
           //Text("Vehicle Is AVERAGE",800,200)
         }
        
       if(deformation < 100 )
         {
           car.shapeColor = color(0,255,0)
           //Text(VehicleIsGOOD,800,200)
         }  
    }
    else
        {
          car.shapeColor = "white"
        }

     car.depth = wall.depth
     car.depth = car.depth + 1

     // car.collide(wall)
     //console.log(wall.depth)   
  drawSprites();
}


