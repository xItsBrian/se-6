
const fruit = ['apple', 'banana', 'orange', 'mango'];
fruit.push('pineapple');
fruit.unshift('kiwi');

console.log(fruit[0]);
console.log(fruit[fruit.length -1]);

const selectedFruits = fruit.slice(2,5);

fruit.indexOf('grape');
console.log(fruit);

const fruitstring = fruit.join(', ');
const fruitFromString = fruitstring.split();
console.log(fruitstring);
console.log(fruitFromString);

const reversefruit = fruits.reverse();
console.log(reversefruit);

fruits.sort();
console.log(fruit);

const email = "john.doe@example.com";
const emailPart = email.split("@"); 
const username = emailPart[0]; 
const domain = emailPart[1]; 
console.log(username); 
console.log(domain); 

const temperature = [72, 85, 90, 65, 75, 88];
let highestTemperature  = temperature[0];

for(let i = 0; i < temperature.length; i++) {
  if(temperature[i] > highestTemperature) {
    highestTemperature = temperature[i];
  }
}
console.log(highestTemperature);


const name = ['Alice','Bob','Charlie','David','Eva'];
for (let i = 0; i < name.length; i++) {
    console.log(name[i] + ' is at index ' + i);
}