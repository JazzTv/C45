var canvas;
var Flowerseed, Vegetableseed, Sunflowerseed;
var plant;


function setup()
{
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  Flowerseed = new Seed (100,height-100,10,10,"flowerSeed");
  Vegetableseed = new Seed (250,height-100,10,10,"vegetableSeed");
  Sunflowerseed = new Seed (400,displayHeight-120,10,10,"sunflowerSeed");
  
}


function draw()
{
  background("black");
  Flowerseed.display ();
  Vegetableseed.display ();
  Sunflowerseed.display ();
  push ()
  rectMode (CENTER);
  fill ("pink")
  rect (width/2,height -20,width,100);
  pop ()
  drawSprites ();
}
