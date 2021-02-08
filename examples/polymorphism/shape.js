class Shape {
    area() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

export default Shape;