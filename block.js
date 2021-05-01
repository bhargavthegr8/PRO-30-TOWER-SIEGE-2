class Block{
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png")
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        
        push();
        if(this.body.speed < 5){
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height)
        }
        else{
          push();
          World.remove(world,this.body);
          this.visibility = this.visibility-5;
          tint(255, this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
          pop();
        }
      }
}
