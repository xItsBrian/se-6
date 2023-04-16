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

function getnumstudent(students) {
    return students.length;
}
function getAverageAge(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
      sum += students[i].age;
    }
    return sum / students.length;
};
function getoldeststudent(students) {
    return students.sort().shift()
}
function getYoungestStudent(students) {
    return students.sort().reverse().shift()
}
function getFullName(students) {
  return students.map(student => `${student.firstName} ${student.lastName}`);
}
console.log(getnumstudent(students))
console.log(getAverageAge(students))
console.log(getoldeststudent(students))
console.log(getYoungestStudent(students))
console.log(getFullName(students))