class Polygon{
    constructor(array){
        this.sides = array;
    }

    get countSides(){
      return this.sides.length
    }

    get perimeter(){
      let value = this.sides.reduce(function(total,num){
            return total + num
        })
    return value
    }
}

class Triangle extends Polygon {

    get isValid(){
        if(this.countSides == 3 && this.perimeter > 0){
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
           if(a + b <= c || a + c <= b || b + c <= a){
               return false
           } else {
            return true
           }
        }
    }
}

class Square extends Polygon {

    get isValid(){
        if(this.countSides == 4 && this.perimeter > 0){
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            let d = this.sides[3]
           if(a == b && b == c && c == d){
               return true
           } else {
            return false
           }
        }
    }

    get area(){
        return this.sides[0]**2
    }

}