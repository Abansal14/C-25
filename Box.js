/*
1) change the class name --> class className extends ParentClassName
2) don;t change the constructor and image
3) replace the command 'this.body = Bodies.rectangle' with super
4) remove 'options'
*/

class Box extends BaseClass {
  constructor(x, y, width, height) {
    super (x, y, width, height);
    
    this.image=loadImage("sprites/wood1.png") 
    
  }
}