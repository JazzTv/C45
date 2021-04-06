class Seed 
{
  constructor (x,y,width,height,seedType)
  {
      this.seedType = seedType;
      this.enable = true;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = loadImage("Images/" + seedType + ".jpg");
      this.seed = createSprite(x,y,width,height);
      this.seed.scale = 0.4;
  }

  display ()
  {
      imageMode (CENTER);
      this.seed.addImage(this.image);

      if(mousePressedOver(this.seed) && this.enable === true) 
      {
        console.log(this.seedType);
        plant = new Plant (200,200,10,10,this.seedType);
        plant.display ();
        this.enable = false;
      }

  }
}