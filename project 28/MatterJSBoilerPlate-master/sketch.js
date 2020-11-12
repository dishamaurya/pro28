
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone,boy;
var mango,tree;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(500,300,20,20);

  boy = new Boy(200,650,30,70);

  ground = new Ground(0,690,800,10);

  tree = new Tree(600,650,40,150);

  mango1 = new Mango(610,550,30);
  mango2 = new Mango(550,510,30);
  mango3 = new Mango(590,530,30);
  mango4 = new Mango(630,480,30);
  mango5 = new Mango(620,500,30);
  mango6 = new Mango(600,470,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  stone.display();
  boy.display();
  ground.display();
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectCollision(stone,mango1); 
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

  drawSprites();
 
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});

    }

    function mouseReleased(){

        stone.fly();
    }

    function keyPressed(){
      if(keyCode === 32){
        Matter.Body.setPosition(stone.body, {x:235, y:420})
        boy.attach(stone.body);
      }
    }
    function detectCollision(stone,mango){
      mangoBodyPosition = mango.body.position
      stoneBodyPosition = stone.body.position

      var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
      
      if(distance <= mango.r + stone.r){
        Matter.Body.setStatic(mago.body,false);
      }
    }

