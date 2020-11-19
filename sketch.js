const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box2 = new Box(150, 100, 50, 50)
    box1 = new Box(190, 200, 40, 40);
    ground = new Ground(200, 380, 400, 20)
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
}