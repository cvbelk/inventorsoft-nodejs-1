import Animal from './animal.js';

class Hedgehog extends Animal {
    constructor(color = 'blue') {
        super(color);
    }
}

export default Hedgehog;