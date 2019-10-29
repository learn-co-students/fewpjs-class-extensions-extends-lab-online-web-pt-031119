// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    let sideNumber = this.sides.length
    return sideNumber
  }

  get perimeter() {
    return this.sides.reduce((a,b) => a + b, 0)
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[2] + this.sides[0] > this.sides[1]) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] * this.sides[1]
  }

  get isValid() {
    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]) {
      return true
    } else {
      return false
    }
  }
}
