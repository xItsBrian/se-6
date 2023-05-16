"use strict";
const getName = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
};
//console.log(getName('John', 'Wick').toLowerCase())
//console.log(getName('Jane', 'Doe'))
const today = new Date();
const year = today.getFullYear();
const myBirthday = new Date(2011, 7, 9);
const age = today.getFullYear() - myBirthday.getFullYear();
//or
const calculateAge = (birthdate) => {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    if (birthdate > today) {
        throw 'Birthdate is invalid';
    }
    return age;
};
const date = '2021-09-01';
const splitdate = date.split('-');
const yearInNum = +splitdate[0];
const monthInNum = +splitdate[1];
const dayInNum = +splitdate[2];
const dateObj = new Date(yearInNum, monthInNum, dayInNum);
//or
const parseDate = (input) => {
    const splitdate = input.split('-');
    if (splitdate.length !== 3) {
        throw 'Input is invalid';
    }
    const yearInNum = +splitdate[0];
    const monthInNum = +splitdate[1];
    const dayInNum = +splitdate[2];
    const dateObj = new Date(yearInNum, monthInNum, dayInNum);
    return dateObj;
};
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 1.8) + 32;
};
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 0.55;
};
const celsiusToKelvin = (celsius) => {
    return celsius + 273.15;
};
const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
};

function isPalindrome(input) {
    const reversedStr = input.split("").reverse().join(""); //reversed string makes the string reversed
    return input === reversedStr; //if the string and the reversed str is the same exact word
}
console.log(isPalindrome("racecar"));