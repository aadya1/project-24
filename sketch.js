
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)

    paper = new Paper(200,320,70);

    leftBoxside=createSprite(300,610,20,100);
    leftBoxside.shapeColor=color("green")
	
	rightBoxside=createSprite(470,610,20,100);
    rightBoxside.shapeColor=color("green")

    base =createSprite(390,650,160,20);
    base.shapeColor=color("green")

    
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();

  drawSprites();
 
}



