// Your code here
class Polygon{
  constructor(sides){
    this.sides = sides;
  };

  get countSides(){
    return(this.sides.length);
  };

  get perimeter(){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return(this.sides.reduce(reducer));
  }
};

class Triangle extends Polygon{

  get isValid(){
    if((this.sides[0] + this.sides[1]) > this.sides[2] && (this.sides[2] + this.sides[1]) > this.sides[0] && (this.sides[0] + this.sides[2]) > this.sides[1]){
      return(true);
    }else{
      return(false);
    };
  };

};

class Square extends Polygon{

  get area(){
    return(this.sides[0] * this.sides[1]);
  };

  get isValid(){
    if((this.sides[0] + this.sides[1] + this.sides[2] + this.sides[3])/4 == this.sides[0]){
      return(true);
    }else{
      return(false);
    };
  };

};