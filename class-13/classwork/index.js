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


function getNumStudents(students) {

  if (Array.isArray(students)) {
      return students.length;
  } else {
      return 'received input is not an array of students';
  }
};
function getAverageAge(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].age;
  }
  if (Array.isArray(students)) {
  return sum / students.length;
  } else {
      return 'received input is not an array of students';
  }
};
function getoldeststudent(students) {
  if (Array.isArray(students)) {
      
      return students.sort().shift()
  } else {
      return 'received input is not an array of students'
  }
}
function getYoungestStudent(students) {
  if (Array.isArray(students)) {
      return students.sort().reverse().shift()
  } else {
      return 'received input is not an array of students'
  }
}
function getFullName(students) {
  if (Array.isArray(students)) {

      return students.map(student => `${student.firstName} ${student.lastName}`);
  } else {
      return 'received input is not an array of students'
  }
}
module.exports = {
  students,
  getNumStudents,
  getAverageAge,
  getoldeststudent,
  getYoungestStudent,
  getFullName,
}