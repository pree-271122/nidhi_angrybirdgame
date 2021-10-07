//used tto call the physic engine properties(Matter.js)
const Engine = Matter.Engine;
//creating a local world
const World= Matter.World;
//inside world add bodies
const Bodies = Matter.Bodies;

//to add matter files to setup
var engine, world;
var ground;
var box1;


function setup(){
    //creating canvas
    var canvas = createCanvas(1200,600);

    //adding matter files
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600,600,1200,20);

    box1= new Box(700,320,90,90);
    box2= new Box(1000,320,90,90);
    pig1 = new Pig(850,320);
    log1 = new Log(850,300,400,PI/2);

    bird=new Bird(100,100);
   
}

function draw(){
    //colour
    background(0);
    //draw is a loop , so update the matter engine to repeat
    Engine.update(engine);
   
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    bird.display();
   
}