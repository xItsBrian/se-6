// // Array Reduce
// const nums = [1, 3, 5, 7, 9];

// // let total = 0;
// // for (let i = 0; i < nums.length; i++) {
// //   total += nums[i];
// // }

// // console.log(total);

// const sum = nums.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// const product = nums.reduce((acc, curr) => {
//   return acc * curr;
// }, 1);

// console.log(sum, 'sum');
// console.log(product, 'product');

// const students = [
//   { name: 'Quincy', age: 20 },
//   { name: 'Jason', age: 21 },
//   { name: 'Alexis', age: 22 },
//   { name: 'Sam', age: 23 },
// ];

// const totalAge = students.reduce((acc, curr) => {
//   return acc + curr.age;
// }, 0);

// console.log(totalAge, 'totalAge');

const getTotalValue = (stocks) => {
    return stocks.reduce((acc, curr) => {
        return acc + curr.prices;
    }, 0);
}
module.exports = {
    getTotalValue,
    stockPrices,
}