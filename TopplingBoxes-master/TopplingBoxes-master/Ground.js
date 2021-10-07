class Ground {
  //properties 
  //pass the x,y,w,h from sketch.js
    constructor(x,y,width,height) {
      //options to give gravity,bouncing
      var options = {
        //gravity
          isStatic: true
      }
      //rectangle
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      //add it to world
      World.add(world, this.body);
    }
    //function 
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };