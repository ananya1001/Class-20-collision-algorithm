var fixedrect,movingrect;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 200, 50, 80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(200,200,80,50);
  movingrect.shapeColor="green";
  movingrect.debug=2;//to show the centre of the objects
  fixedrect.debug=2;
}

function draw() {
  background(0,0,0);
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  console.log(movingrect.x-fixedrect.x);//fixedrect.x-movingrect(console.log will be vice versa)
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  drawSprites();
}