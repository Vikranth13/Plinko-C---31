const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particles = [];
var plinkos = [];
function setup() {
  createCanvas(500, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(250,600,500,20);
  ground2 = createSprite(250,595,500,15);
  ground2.shapeColor = "brown";
  b1 = new Border(5,300,10,600);
  b2 = new Border(100,495,10,200);
  b3 = new Border(200,495,10,200);
  b4 = new Border(300,495,10,200);
  b5 = new Border(400,495,10,200);
  b6 = new Border(495,300,10,600);

  for (var i = 35; i <=460; i+=50) 
    {
      plinkos.push(new plinko(i,50,10));
      
    }

  for (i = 60; i <=460; i+=50) 
    {
      plinkos.push(new plinko(i,150,10));
      
    }
  
  for (i = 35; i <=460; i+=50) 
    {
      plinkos.push(new plinko(i,250,10));
      
    }

  for (i = 60; i <=460; i+=50) 
    {
      plinkos.push(new plinko(i,350,10));
      
    }
}




 


function draw() {
  background(0);
  Engine.update(engine);
  
  
  for (var p = 0; p < plinkos.length; p++) {
    plinkos[p].display();
  }

  if(frameCount%60===0){
    particles.push(new particle(random(50, 550), 10,10));
  }

 for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  ground.display();
  drawSprites();
}






