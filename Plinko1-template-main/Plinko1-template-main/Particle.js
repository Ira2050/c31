class particle{
    constructor(x,y,r){

        var options = {
          isStatic:false,
          restitution:1,
          friction:0.5,
          density: 1.2
        }
        
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r-20,options);
    this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world, this.body);
    }
    display(){
        var paperPos = this.body.position;
        push();
        translate(paperPos.x,paperPos.y);
        rectMode(CENTER);
        fill(255,0,255);
        //imageMode(CENTER);
        //image(this.image,0,0,this.r,this.r);
        ellipse(0,0,this.r, this.r);
        pop();
      }
}
