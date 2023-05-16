const getName = (firstName: string, lastName: string): string => {
    return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
};
console.log(getName('John', 'Wick'));
