class Plant
{
    constructor (x,y,width,height,seedType)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage ("Images/sapling.png");
        this.plant = createSprite (x,y,width,height);
    }

    display ()
    {
        this.plant.addImage(this.image);
    }
}