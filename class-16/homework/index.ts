const getName = (firstname: string, lastname: string): string => {
    return `${firstname} ${lastname}`;
}
//console.log(getName('John', 'Wick').toLowerCase())
//console.log(getName('Jane', 'Doe'))
const today = new Date();

const year = today.getFullYear()

const myBirthday = new Date(2011, 7, 9)

const age = today.getFullYear() - myBirthday.getFullYear()
//or
const calculateAge = (birthdate: Date): number => {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear()
    if (birthdate > today) {
        throw 'Birthdate is invalid'
    }
    return age
}

const date = '2021-09-01'

const splitdate = date.split('-')
const yearInNum = +splitdate[0]
const monthInNum = +splitdate[1]
const dayInNum = +splitdate[2]
const dateObj = new Date(yearInNum, monthInNum, dayInNum)
//or
const parseDate= (input: string):Date => {
    const splitdate = input.split('-')
    if (splitdate.length !==3) {
        throw 'Input is invalid'
    }
    const yearInNum = +splitdate[0]
    const monthInNum = +splitdate[1]
    const dayInNum = +splitdate[2]
    const dateObj = new Date(yearInNum, monthInNum, dayInNum)
    return dateObj
}


const celsiusToFahrenheit = (celsius: number): number => {
    return (celsius * 1.8) + 32
}

const fahrenheitToCelsius = (fahrenheit: number): number => {
    return (fahrenheit - 32) * 0.55
}
const celsiusToKelvin = (celsius: number): number => {
    return celsius + 273.15
}
const kelvinToCelsius = (kelvin: number): number => {
    return kelvin - 273.15
}
//console.log(kelvinToCelsius(32))

/*Problem 3: Palindrome Checker

Create a TypeScript program that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). The program should include the following function:

isPalindrome(input: string): boolean: This function should accept a string as input and return true if the input is a palindrome, and false otherwise.
The function should be type-safe and use proper TypeScript type annotations. Additionally, create unit tests for the function to ensure it works correctly. Test the function with at least five different input values, including edge cases and potential errors.

For example:

"racecar" should return true
"A man a plan a canal Panama" should return true
"hello" should return false
"12321" should return true
"TypeScript" should return false*/
function isPalindrome(input: string): boolean {
    const reversedStr = input.split("").reverse().join("");//reversed string makes the string reversed
    return input === reversedStr;//if the string and the reversed str is the same exact word
}
  


console.log(isPalindrome("racecar"))