const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bground,bg,snowImg,snow,snow2,snow3,snow4,sound

function preload(){
bground=loadImage("snow2.jpg")
snowImg=loadImage("snow4.webp")
sound=loadSound("snowflake-waltz.mp3")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

snow=createSprite(random(10,400),100,40,40)
snow2=createSprite(random(410,790),100,40,40)
snow3=createSprite(random(10,400),100,40,40)
snow4=createSprite(random(10,400),100,40,40)
sound.play()
  
}

function draw() {
  background(255,255,255); 
  snow.y=snow.y+5
  snow2.y=snow2.y+5
  snow3.y=snow3.y+5
  snow4.y=snow4.y+5
  snow.visible=false
  snow2.visible=false
  snow3.visible=false
  snow4.visible=false
  
  if(snow.y>400)
  {
snow.x=random(10,190)
snow.y=-20
  }

  if(snow2.y>400)
  {
snow2.x=random(210,390)
snow2.y=-60
  }

  if(snow3.y>400)
  {
snow3.x=random(410,590)
snow3.y=-80
  }

  if(snow4.y>400)
  {
snow4.x=random(610,790)
snow4.y=-40
  }

  imageMode(CENTER);
   image(bground, 200, 50);
   image(snowImg ,snow.position.x,snow.position.y,100,100);
   image(snowImg ,snow2.position.x,snow2.position.y,100,100);
   image(snowImg ,snow3.position.x,snow4.position.y,100,100);
   image(snowImg ,snow4.position.x,snow4.position.y,100,100);
  
  drawSprites();
}