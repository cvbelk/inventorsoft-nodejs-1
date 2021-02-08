import { expect } from 'chai';

import Product from '../tasks/product.js';

describe('Products tests', function () {
    const productMock = { id: 'czhvgc', name: 'Apple', price: 3.5 };

    it('product instance should have properties: id, name, price', function () {
        const product = new Product(productMock);

        expect(product).to.be.an.instanceof(Product);
        for (const key in product) {
            if (product.hasOwnProperty(key)) {
                const element = product[key];
                expect(element).to.be.eq(productMock[key]);
            }
        }
    });

    it('should return price in dollars', function () {
        const product = new Product(productMock);
        const priceInDollars = product.getPriceInDollars();
        const expectedPriceIndollars = product.price + ' $';

        expect(product.getPriceInDollars).to.be.instanceOf(Function);
        expect(priceInDollars).to.be.eq(expectedPriceIndollars);
    });
});