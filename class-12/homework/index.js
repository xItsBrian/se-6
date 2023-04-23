const students = [
    {
      firstName: 'Darren',
      lastName: 'Chen',
      age: 30,
    },
    {
      firstName: 'Gordon',
      lastName: 'Chen',
      age: 28,
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      age: 18,
    },
  ];

function numStudent(students) {
    return students.length;
}
function averageAge(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
      sum += students[i].age;
    }
    return sum / students.length;
};
function oldestStudent(students) {
    return students.sort().shift()
}
function youngestStudent(students) {
    return students.sort().reverse().shift()
}
function fullName(students) {
  return students.map(student => `${student.firstName} ${student.lastName}`);
}
console.log(numStudent(students))
console.log(averageAge(students))
console.log(oldestStudent(students))
console.log(youngestStudent(students))
console.log(fullName(students))
