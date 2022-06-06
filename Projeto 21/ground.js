class Ground 
{
constructor(x,y,w,h) {
    let glr_options ={
        isStatic: true
    }
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x,y,w,h,glr_options);
    World.add(world,this.body);

}
show() {

  var pos = this.body.position;
  push();
  fill(200)
  rectMode(CENTER);
  rect(pos.x,pos.y,this.w,this.h);
  pop();

}
}