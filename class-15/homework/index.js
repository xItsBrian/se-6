const stockPrices = [
    {
      symbol: 'AAPL',
      price: 182,
      title: 'Apple Inc.',
    },
    {
      symbol: 'GOOG',
      price: 192,
      title: 'Alphabet Inc.',
    },
    {
      symbol: 'FB',
      price: 212,
      title: 'Facebook Inc.',
    },
    {
      symbol: 'AMZN',
      price: 312,
      title: 'Amazon.com Inc.',
    },
  ];

const getTotalValue = (stocks) => {
  return stocks.reduce((arr,curr) => {
    return arr + curr.price;
  }, 0);
}
function getAveragePrice(stocks) {
  if (stocks.length === 0) {
    return 0;
  }
  return getTotalValue(stocks) / stocks.length
}
function getMostExpensiveStock(stocks) {
    let mostExpensive = stocks[0];
  
    for (let i = 1; i < stocks.length; i++) {
      if (stocks[i].price > mostExpensive.price) {
        mostExpensive = stocks[i];
      }
    }
  
    return mostExpensive;
  }
function getCheapestStock(stocks) {
    let cheapest = stocks[0];
  
    for (let i = 1; i < stocks.length; i++) {
      if (stocks[i].price < cheapest.price) {
        cheapest = stocks[i];
      }
    }
  
    return cheapest;
}

function getNumberOfStocks(stocks) {
    return stocks.length
}
const filterStocksAbovePrice = (stocks, threshold) => {
    return stocks.filter((stock) => {
        return stock.price> threshold;
    });
};

function getStockSymbols(stocks) {
  const symbols = [];

  for (let i = 0; i < stocks.length; i++) {
    symbols.push(stocks[i].symbol);
  }

  return symbols;
}
function sortByPriceAscending(stocks) {
  return stocks.sort((a, b) => a.price - b.price);
  
}
function searchStocks(stocks, searchString) {
  return stocks.filter(stock => {
    return stock.symbol.includes(searchString) || stock.title.includes(searchString);
  });
}
function groupStocksByFirstLetter(stockPrices) {
  const groupedStocks = {};

  stockPrices.forEach(stock => {
    const firstLetter = stock.symbol.charAt(0);
    if (!groupedStocks[firstLetter]) {
      groupedStocks[firstLetter] = {
        totalValue: 0,
        averagePrice: 0,
        count: 0,
      };
    }

    groupedStocks[firstLetter].totalValue += stock.price;
    groupedStocks[firstLetter].count++;
    groupedStocks[firstLetter].averagePrice = groupedStocks[firstLetter].totalValue / groupedStocks[firstLetter].count;
  });

  return groupedStocks;
}

console.log(groupStocksByFirstLetter(stockPrices))

module.exports = {
    stockPrices,
    getTotalValue,
    getAveragePrice,
    getMostExpensiveStock,
    getCheapestStock,
    getNumberOfStocks,
    filterStocksAbovePrice,
    getStockSymbols,
    sortByPriceAscending,
    searchStocks,
    groupStocksByFirstLetter
}