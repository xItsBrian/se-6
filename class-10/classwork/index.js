// const num = [2, 4, 7, 3];
// console.log(num[0]);
// console.log(num.length);
// console.log(num.length - 1);

// const num = [2, 4, 7, 3];
// num.push(5); //back of list
// num.unshift(1); //front of list

// num.push(6);
// num.unshift(6);
// num.unshift(12);

// // make num [12, 6, 1, 2, 10, 4, 7, 3, 5, 6]
// num.splice(4,0,10);
// //index of 4 //delete 0 (nothing) //number 10 added

// num.splice(1, 3)
// //start at index 1 //delete 3 items (6, 1, 2)

// // make the num [12, 13, 10, 4, 7, 3, 5, 6]
// num.splice(1,0,13);
// //start at index 1 //delete nothing //add 13

// num[1] = 14;

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// for (let i = num.length - 1; i >= 0; i--) {
//     console.log(num[i]);
// }

// const arr = ['Brian', 'Emily', 'Ivan', 'Jun', 'Pikachu']
// arr.splice(4, 1);
// arr.unshift('Vincent')
// arr.splice(3, 0, 'Leon', 'Quinn')


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] ,'is the index', i);
// }


// Array methods are special array functions that are built into the array object in JavaScript. They are super convenient and useful. Here are some of the most commonly used array methods: push, pop, shift, unshift, splice, slice, indexOf, lastIndexOf, join, split, reverse, sort, concat, forEach, map, filter, reduce, reduceRight, every, some, find, findIndex, includes, and flat.
// commonly used array methods: push, pop, shift, unshift, splice, slice, indexOf,  join, split, reverse, sort, forEach, map, filter, reduce, every, some, find, findIndex, includes, and flat.

// push: adds an element to the end of an array
// pop: removes the last element of an array
// shift: removes the first element of an array
// unshift: adds an element to the beginning of an array
// splice: removes or adds elements to an array
// slice: return a copy of a portion of an array

const names = ['Brian', 'Emily', 'Ivan', 'Jun', 'Pikachu']
names.pop();
names.shift();

const newNames = names.slice(0, 2);
//starting index is inclusive, ending index is exclusive

const cities = ['Paris', 'Tokyo', 'New York', 'London', 'Hong Kong']
const newCities = cities.slice(0,3);
const newCities2 = cities.slice(3,5);

//indexOf
const indexOfLondon = cities.indexOf('London');
const indexOfMiami = cities.indexOf('Miami'); //gives -1 cause doesnt exist

//join: joins all elements of an array into a string
const str = cities.join('$')

//split: splits a string into an array of substrings
const cities2 = str.split('$')

//reverse: reverses elements in an array
const reversedCities = cities.reverse();

//sort: sort the elements of an array
const sortedCities = cities.sort().reverse(); //sorts in alp order then reverse

const phone = '646.629.7087'
const number2 = number.split('.').join('-');

const phoneArr = number2.split('')
phoneArr.splice(3,1,')');
phoneArr.splice(0,0,'(');
const number3 = phoneArr.join('');