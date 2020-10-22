
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	dencity:1.2
}
var ball;
var box;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
   var ball = createSprite(70,680,15,15);
    ball.shapeColor = "red";
	engine = Engine.create();
	world = engine.world;
	var box = createSprite(760,650,70,70);
	box.shapeColor = "white";

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  drawSprites();
 
}
ball.display();
box.display();


