// const x = 10; //const create a constant, which means it cannot be changed
// let y =20; //let create a variable, which means it can be changed

// //x = 20; //this will throw an error
// y = 21; //this will work
// const anotherX = x +1;

// console.log(x);
// console.log(y);

//Strings - a string is a sequence of characters surrounded by quotes
// const firstName = 'John';
// const lastName = 'Doe';
// const age = '30'

// //template literal - a string thats lets you use vars in it
// const greeting = `Hello my name is ${firstName} ${lastName} and I'm ${age} years old`

// const concatenationGreeting = //PAIN
// 'Hello my name is' + firstName + '' + lastName + 'and i am' + age + 'years old';

// const firstName1 = 'Brad';
// const age1 = '36';
// const city = 'Miami';
// const greeting1 = `My name is ${firstName1} and I am ${age1} and I live in ${city}`;
// console.log(greeting1);

//number - a number is a number
// const x = 10;
// const y = 20;
// const z = x + y;
// const a = x - y;
// const b = x * y;
// const c = x / y;
// const d = y % x;
// console.log(x,y,z,a,b,c,d);

// const price = 19.99
// const roundedPrice = Math.round(price);
// const floorPrice = Math.floor(price);
// const ceilPrice = Math.ceil(price);
// const squarePrice = Math.pow(price, 2);
// const rootPrice = Math.sqrt(price);

//Boolean - a boolean is a true or false value
// const isTrue = true;
// const isFalse = false;
// const isMarried = true;
// const isTodayTuesday = false;

//Arrays - an array is a list of items of the same type
const ageOfStudents = [10,11,12,13,14,15];
const numberOfAges = ageOfStudent.length;
const secondStudentAge = ageOfStudents[1];
const lastStudentAge = ageOfStudents[ageOfStudent.length - 1];
ageOfStudents.push(15) //add 15 to the end of the array, mutates array
ageOfStudents.splice(6,1); //removes the last element from the array, mutates the array
//remove the element at index 2 and only remove 1 element
ageOfStudents.splice(2,1);

//update the element at index of 2 to be 20
ageOfStudents[2] = 20;

//object - an object is a collection of key value pairs
const product = {
    name: 'iPhone',
    price: 1000,
    color: 'black',
    isAvailable: true,
    features: ['touchScreen','camera','speaker'],
    owner: {
        name: 'John',
        age: 30,
    }
}

const object = {
    title: 'The Legend of Zelda',
    genre: 'action adventure',
    price: 59.99,
    isAvailable: true,
    features: ['openWorld','actionCombat','puzzles'],
    publisher: {
        name: 'Nintendo',
        yearFounded: 1889,
    }
}
