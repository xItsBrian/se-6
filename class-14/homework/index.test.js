const  { data, getTotalPrice, getAveragePrice,getMostExpensiveProduct,getCheapestProduct,getNumberOfproducts } = require('./');


describe('Students functions:getNumberOfproducts', () => {
    it('should return the number of products', () => {
        expect(getNumberOfproducts(data)).toEqual(4);
    });
})
describe('Students functions:getTotalPrice', () => {
    it('should return the number of the total price', () => {
        expect(getTotalPrice(data)).toEqual(19.5);
    });
})
describe('Students functions:getCheapestProduct', () => {
    it('should return the cheapest product', () => {
        expect(getCheapestProduct(data)).toEqual({name: 'apple', price: 1.5});
    });
})
describe('Students functions:getAveragePrice', () => {
    it('should return the average of the total price', () => {
        expect(getAveragePrice(data)).toEqual(4.875);
    });
})
describe('Students functions:getMostExpensiveProduct', () => {
    it('should return the most expensive product', () => {
        expect(getMostExpensiveProduct(data)).toEqual({name: 'banana', price: 8});
    });
})
