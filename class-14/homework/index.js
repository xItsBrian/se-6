const data = [
    {
      name: 'apple',
      price: 1.5,
    },
    {
      name: 'banana',
      price: 8,
    },
    {
      name: 'orange',
      price: 4,
    },
    {
      name: 'pear',
      price: 6
    },
  ];
  function getMostExpensiveProduct(products) {
    let mostExpensive = products[0];
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > mostExpensive.price) {
        mostExpensive = products[i];
      }
    }
  
    return mostExpensive;
  }
  function getCheapestProduct(products) {
    let cheapestProduct = products[0];
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price < cheapestProduct.price) {
        cheapestProduct = products[i];
      }
    }
  
    return cheapestProduct;
  }
  function getNumberOfproducts(products) {
      return products.length;
  }
function getTotalPrice(products) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
  }
  return totalPrice;
}
function getAveragePrice(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      sum += products[i].price;
    }
    if (Array.isArray(products)) {
    return sum / products.length;
    } else {
        return 'received input is not an array of products';
    }
}; 

module.exports = {
    data,
    getTotalPrice,
    getAveragePrice,
    getMostExpensiveProduct,
    getCheapestProduct,
    getNumberOfproducts
}