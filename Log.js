/*
1) change the class name --> class className extends ParentClassName
2) don;t change the constructor and image
3) replace the command 'this.body = Bodies.rectangle' with super
4) remove 'options'
*/

class Log extends BaseClass{
   constructor(x,y,height,angle)
   { super(x,y,20,height,angle); 
    this.image = loadImage("sprites/wood2.png");
     Matter.Body.setAngle(this.body, angle); 
    } 
  }