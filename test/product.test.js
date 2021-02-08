import { expect } from 'chai';

import Product from '../tasks/product.js';

describe('Products tests', function () {
    const productMock = { id: 'czhvgc', name: 'Apple', price: 3.5 };
    const product = new Product(productMock);

    it('product instance should have properties: id, name, price', function () {
        expect(product.id).to.be.eq(productMock.id);
        expect(product.name).to.be.eq(productMock.name);
        expect(product.price).to.be.eq(productMock.price);
    });

    it('should return price in dollars', function () {
        const priceInDollars = product.getPriceInDollars();
        const expectedPriceIndollars = product.price + ' $';

        expect(product.getPriceInDollars).to.be.instanceOf(Function);
        expect(priceInDollars).to.be.eq(expectedPriceIndollars);
    });

    it('should have writeName method', function () {
        const nameResult = product.writeName();

        expect(product.writeName).to.be.instanceOf(Function);
        expect(nameResult).to.be.eq('the product name is' + product.name);
    });
});