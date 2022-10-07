
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao;
var parede, parede2;
var bola;

function preload()
{
	
}

function setup() {
	createCanvas(600, 300);


	engine = Engine.create();
	world = engine.world;

	var bola_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:0.5
	}

	//Create the Bodies Here.
chao = Bodies.rectangle(300,300,600,50,{isStatic: true});
World.add(world,chao);

parede = Bodies.rectangle(400,300,15,180,{isStatic: true});
World.add(world,parede);

parede2 = Bodies.rectangle(535,300,15,180,{isStatic: true});
World.add(world,parede2);

bola = Bodies.circle(200,200,15,bola_options);
World.add(world,bola);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("black");
  
  fill("yellow");
rect(chao.position.x,chao.position.y,600,50);

rect(parede.position.x,parede.position.y,15,180);

rect(parede2.position.x,parede2.position.y,15,180);

fill("white")
ellipse(bola.position.x,bola.position.y,15);

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bola,{x:0,y:0},{x:5,y:-7})
	}
}


