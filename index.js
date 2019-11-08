// Your code here

class Polygon {
    constructor(arr) {
        this.array = arr;
    }

   get countSides() {
       return this.array.length
   }
   
   get perimeter() {
    return this.array.reduce((memo, element) => {return element + memo }, 0)   
   }
}

class Triangle extends Polygon {
     
    get isValid() {
        const a = this.array[0]
        const b = this.array[1]
        const c = this.array[2]
        if (a + b > c && b + c > a && a + c > b ) {
            return true
        } else {
            return false
        }
       }
}

class Square extends Polygon {
    get isValid() {
        const a = this.array[0]
        const b = this.array[1]
        const c = this.array[2]
        const d = this.array[3]
        if (a === b && b === c && c === d) {
            return true
        } else {
            return false
        }
    }
    get area() {
        return this.array[0] * this.array[1]
    }
}