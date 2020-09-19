const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

function setup(){
 createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;


 var ground_options={
  isStatic:true

 }
 ground=Bodies.rectangle(200,350,400,50,ground_options);
 World.add(world,ground);

var ball_options={
    restitution:1.0
}

 ball=Bodies.circle(200,200,20,ball_options);
 World.add(world,ball);
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,50);
    ellipse(ball.position.x,ball.position.y,20);
}





