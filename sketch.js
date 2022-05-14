
function setup() {
  createCanvas(400,400);
  var sprite=createSprite(200,200,20,20);
}

function draw() 
{
  background("white");
  drawSprites();
  if(keyDown("a")){
    background("blue");
  }
  if(keyDown("s")){
    background("red");
  }
  if(keyDown("d")){
    background("green");
  }
  if(keyDown("w")){
    background("yellow");
  }

}




