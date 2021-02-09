import Product from './product.js';
class Laptop extends Product {
    constructor(id, name, price) {
        super(id, name, price);
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }

    writeName() {
        return ('the laptop name is' + this.name);
    }
}

//const laptop = new Laptop('czhvyh', 'MacBookPro', 3000);
//laptop.changePrice(3500);
//console.log(laptop.writeName());
//console.log(laptop.getPriceInDollars());
export default Laptop;