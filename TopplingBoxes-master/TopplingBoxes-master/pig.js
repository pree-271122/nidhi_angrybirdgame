class Pig {
    constructor(x, y) {
      //options
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      //rectangle
      this.body = Bodies.rectangle(x, y, 60, 60, options);
      this.width = 60;
      this.height = 60;
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
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  