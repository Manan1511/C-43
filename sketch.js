var database;
var gameState =0;

var shooter, ball, bullets;
var shooterimg, ballimg;
var ballGroup;

function preload(){
  shooterimg = loadImage("images/shooter.png");
  ballimg = loadImage("images/image.png");
}
function setup() {
  createCanvas(displayWidth-20, displayHeight-220);
  shooter = createSprite(displayWidth/2,displayHeight-280,20,20);
  shooter.addImage(shooterimg);
  shooter.scale = 0.7;
  edges = createEdgeSprites();
  ballGroup = new Group();
}

function draw() {
  background(0);

  
  shooter.x = mouseX;
  fire();
  spawner();
  drawSprites();
}
function fire(){
  
  bullets = createSprite(shooter.x,shooter.y,5,10);
  bullets.shapeColor = "yellow"
;  bullets.velocity.y = -30;
}
function spawner(){
  if(frameCount%70===0){
    ball = createSprite(10,100,10,10);
  ball.addImage(ballimg);
  ball.x = random(20,displayWidth-20);
   ballGroup.add(ball);
  ball.scale = 0.3;
  ball.lifetime = 200;
  ball.velocity.y = 10;
  ballGroup.bounceOff(edges);
  }
}