// import Hedgehog from './hedgehog-factory.js';
// import Hedgehog from './hedgehog-weakmap-namespaces.js';
// import Hedgehog from './hedgehog-symbols.js';
// import Fox from './inheritance/fox-factory.js';

// showInheritance();

// function showInheritance() {
//     const animal = new Fox('purple?');
//     animal.zoom();

//     console.log(animal.name); //valid value
//     console.log(animal.speed);
//     console.log(animal.color);
// }

// import Bar from './abstraction/bar.js';

// showAbstraction();

// function showAbstraction() {
//     const wtf = new Bar('a random text');

//     console.log(wtf.genericMethod());
//     console.log(wtf.doSomething());
// }

// import Circle from './polymorphism/circle.js';
// import Rectangle from './polymorphism/rectangle.js';
// import Triangle from './polymorphism/triangle.js';
// import Shape from './polymorphism/shape.js';

// function cumulateShapes(shapes) {
//     return shapes.reduce((sum, shape) => {
//         if (shape instanceof Shape) {
//             console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
//             return sum + shape.area()
//         }
//         throw Error('Bad argument shape.');
//     }, 0);
// }

// const shapes = [new Circle(3), new Rectangle(2, 3), new Triangle(3, 4), new Circle(2)];

// console.log(cumulateShapes(shapes));
