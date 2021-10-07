class Box {
  constructor(x, y, width, height) {
    //options
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    //rectangle
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x =x;
    this.y = y;
    //add to world
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    //push and pop are like brackets
    push();
    //translate my x and y
    translate(pos.x, pos.y);
    //rotate with the bodies angle
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
