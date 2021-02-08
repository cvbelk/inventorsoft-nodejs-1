import Shape from './shape.js';

class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b;
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}

export default Triangle;