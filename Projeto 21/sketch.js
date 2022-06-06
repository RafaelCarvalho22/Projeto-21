const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ball,ground,left,right;


function setup() {
	createCanvas(1500,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,670,width,20);
	left = new Ground(980,620,20,120);
	right = new Ground(1250,620,20,120);

	var ball_options ={
		isStatic: false,
		restution: 0.4,
		//friction:0,
		density:1.2
	}

	ball = Bodies.circle(300,300,30,ball_options);
	World.add(world,ball);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  left.show();
  right.show();
  
  ellipse(ball.position.x,ball.position.y,30)
  
  drawSprites();
 
}

function keyPressed() {
  
 if (keyCode == UP_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:40,y:-40});
 }
}


