class Log {
    constructor(x, y,  height,angle) {
      //options
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      //rectangle
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      this.x =x;
      this.y = y;
      Matter.Body.setAngle(this.body,angle);
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
      stroke("white");
      strokeWeight(2);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  