import { expect } from 'chai';

import Laptop from '../tasks/laptop.js';
import Product from '../tasks/product.js';

describe('Laptop tests', function () {
    const laptopMock = { id: 'czhvyh', name: 'MacBookPro', price: 3000 };
    const laptop = new Laptop(laptopMock);

    it('should be inherited from product', function () {
        expect(laptop).to.be.instanceOf(Product);
    });

    it('should implement changePrice', function () {
        const price = 3500;

        laptop.changePrice(price);

        expect(laptop.price).to.be.eq(price);
    });

    it('should have writeName method', function () {
        const nameResult = laptop.writeName();

        expect(laptop.writeName).to.be.instanceOf(Function);
        expect(nameResult).to.be.eq('the laptop name is' + laptop.name);
    });
});