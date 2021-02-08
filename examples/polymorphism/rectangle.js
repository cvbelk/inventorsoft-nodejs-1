import Shape from './shape.js';

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }
}

export default Rectangle;