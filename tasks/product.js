class Product {
    constructor({ id, name, price }) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getPriceInDollars() {
        return this.price + ' $';
    }

    changePrice() {
        throw new Error('You have to implement the method changePrice!');
    }

    writeName() {
       return 'the product name is' + this.name;
    }
}

export default Product;