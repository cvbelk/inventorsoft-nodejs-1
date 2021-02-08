import Product from './product.js'

class Laptop extends Product {
    // TODO
    constructor({ id, name, price }) {
        super(id, name, price);
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }

    writeName() {
        return 'the laptop name is' + this.name;
    }
}

export default Laptop;