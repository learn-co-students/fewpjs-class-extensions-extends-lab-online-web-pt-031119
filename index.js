class Polygon {

    constructor(shapeSides) {
        this.shapeSides = shapeSides 
    }

    get countSides() {
        return this.shapeSides.length  
    }

    get perimeter() {
        return this.shapeSides.reduce((memo, element) => {return element + memo }, 0) 
    }
}

class Triangle extends Polygon {

    get isValid() {
        const pair1 = this.shapeSides[0] + this.shapeSides[1] > this.shapeSides[2] 
        const pair2 = this.shapeSides[1] + this.shapeSides[2] > this.shapeSides[0]
        const pair3 = this.shapeSides[0] + this.shapeSides[2] > this.shapeSides[1]

        return pair1 && pair2 && pair3 
    }
}

class Square extends Polygon {

    // get isValid() {
    //     for (let i = 0; i < this.shapeSides.length; i++) {
    //         if (this.shapeSides[i] !== this.shapeSides[0]) {
    //             return false 
    //         }
    //     }    
    //     return true   
    // }

    get isValid() {
        return this.shapeSides.every(element => element === this.shapeSides[0]) 
    }
    
    get area() {
        return this.shapeSides[0] * this.shapeSides[1]         
    }
}





