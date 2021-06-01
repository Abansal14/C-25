
/*
1) change the class name --> class className extends ParentClassName
2) don;t change the constructor and image
3) replace the command 'this.body = Bodies.rectangle' with super
4) remove 'options'
*/
class Pig extends BaseClass {
    constructor(x, y) {
      
      super (x, y, 50, 50);
      
      this.image=loadImage("sprites/enemy.png")
    }
  };
  