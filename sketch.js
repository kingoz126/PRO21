var bullet,wall;

var speed, weight;

var thickness;

function setup() {
  createCanvas(1000,400);

speed=random(55,90);
weight=random(400,1500);
thickness = random(22,83);

bullet = createSprite(50,200,50,10);
bullet.velocityX=speed;

wall=createSprite(800,200,60,height/2);
wall.shapeColor = (80,80,80);

}

function draw() {
  background("black");  

hasCollided(bullet , wall);
  drawSprites();
}

function hasCollided(bullet,wall){
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX=0;
    var damage =0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10){
      bullet.shapeColor=color(255,0,0);
    }

    if(damage < 10){
      bullet.shapeColor=color(0,255,0);
    }
  }
}