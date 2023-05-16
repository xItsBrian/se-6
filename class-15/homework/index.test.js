const { stockPrices, getTotalValue,getAveragePrice, getMostExpensiveStock, getCheapestStock,getNumberOfStocks, filterStocksAbovePrice,getStockSymbols,sortByPriceAscending, searchStocks,groupStocksByFirstLetter } = require('./');
describe('stockPrices functions:getTotalValue', () => {
    it('returns the total value of all the stocks', () => {
        expect(getTotalValue(stockPrices)).toEqual(898)
    })
    it('returns the total value of 0 stock', () => {
        expect(getTotalValue([])).toEqual(0)
    })
    it('retturns the value of 1 stock', () => {
        expect(getTotalValue([{ price: 1}])).toEqual(1)
    })
})
describe('stockPrices functions:getAveragePrice', () => {
    it('should return the average price', () => {
        expect(getAveragePrice(stockPrices)).toEqual(224.5)
    })
    it('returns the average price of all stocks', () => {
        expect(getAveragePrice([])).toEqual(0)
    })
    it('returns the average price of 1 stock',() => {
        expect(getAveragePrice([{price: 1}])).toEqual(1)
    })
    
})
describe('stockPrices functions:getMostExpensiveStock', () => {
    it('should return the most expensive stock', () => {
        expect(getMostExpensiveStock(stockPrices)).toEqual({"price": 312, "symbol": "AMZN", "title": "Amazon.com Inc."})
    })
    it('should return the most expensive stock of 0 stock', () => {
        expect(getMostExpensiveStock([])).toEqual(undefined)
    })
    it('returns the object representing the most expensive stock of 1 stock', () => {
        expect(getMostExpensiveStock([{price: 1}])).toEqual({"price": 1})
    })
})
describe('stockPrices functions:getcheapestStock', () => {
    it('should return the cheapest stock', () => {
        expect(getCheapestStock(stockPrices)).toEqual({"price": 182, "symbol": "AAPL", "title": "Apple Inc."})
    })
    it('returns the cheapest stock of 0 stock', () => {
        expect(getCheapestStock([])).toEqual(undefined)
    })
    it('returns the object representing the cheapest stockof 1 stock', () => {
        expect(getCheapestStock([{price: 1}])).toEqual({"price": 1})
    })
})
describe('stockPrices functions:getNumberOfStocks', () => {
    it('should return the total stocks', () => {
        expect(getNumberOfStocks(stockPrices)).toEqual(4)
    })
    it('returns the total number of 0 stocks', () => {
        expect(getNumberOfStocks([])).toEqual(0)
    })
    it('returns the total number of 1 stocks', () => {
        expect(getNumberOfStocks([{price: 1}])).toEqual(1)
    })
})
describe('stockPrices functions:filterStocksAbovePrice', ()=>{
    it('should return the stocks above 200', () => {
        expect(filterStocksAbovePrice(stockPrices, 200)).toEqual([
            {
                symbol: 'FB',
                price: 212,
                title: 'Facebook Inc.',
            },
            {
                symbol: 'AMZN',
                price:312,
                title: 'Amazon.com Inc.',
            },
        ]);
    });
    it('returns the stocks above a certain price of 0 stocks', ()=> {
        expect(filterStocksAbovePrice([], 200)).toEqual([])
    })
})
describe("stockprices functions:getStockSymbols", () => {
    it('returns the symbols of the stocks', ( ) => {
        expect(getStockSymbols(stockPrices)).toEqual(["AAPL", "GOOG", "FB", "AMZN"])
    })
    it('should return the symbol for 1 stock', () => {
        expect(getStockSymbols([{symbol: 'AAPL'}])).toEqual(["AAPL"])
    })
    it('returns the symbols of 0 stock', () => {
        expect(getStockSymbols([])).toEqual([])
    })
}) 
describe("stockPrices functions: sortByPriceAscending", ()=>{
    it('returns the stocks by price ascending', () => {
        expect(sortByPriceAscending(stockPrices)).toEqual([{"price": 182, "symbol": "AAPL", "title": "Apple Inc."},{"price": 192, "symbol": "GOOG", "title": "Alphabet Inc."}, {"price": 212, "symbol": "FB", "title": "Facebook Inc."}, {"price": 312, "symbol": "AMZN", "title": "Amazon.com Inc."}])
    })
    it('returns 0 stock by price ascending', () => {
        expect(sortByPriceAscending([])).toEqual([])
    })
    it('returns 2 price ascending', () => {
        expect(sortByPriceAscending([{price:182}, {price:92}])).toEqual([{"price": 92}, {"price": 182}])
    })
})
describe('stockPrices functions:searchStocks', () => {
    it('return the stock youre looking for', () => {
        expect(searchStocks(stockPrices, 'Apple')).toEqual([{"price": 182, "symbol": "AAPL", "title": "Apple Inc."}])
    })
    it('return nothing if they are are 0 stocks', () => {
        expect(searchStocks([])).toEqual([])
    })
})
describe('stockPrices functions:groupByFirstletter', () => {
    it('returns the stocks total value, totalprice, count, and averagePrice', () => {
        expect(groupStocksByFirstLetter(stockPrices)).toEqual({"A": {"averagePrice": 247, "count": 2, "totalValue": 494}, "F": {"averagePrice": 212, "count": 1, "totalValue": 212}, "G": {"averagePrice": 192, "count": 1, "totalValue": 192}})
    })
    it('returns nothing if there were no stocks', () => {
        expect(groupStocksByFirstLetter([])).toEqual({})
    })
})