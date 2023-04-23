const  { students, getNumStudents, getAverageAge,getoldeststudent,getYoungestStudent,getFullName } = require('./');



describe('Students functions:getNumStudents', () => {
    it('should return the number of students', () => {
        expect(getNumStudents(students)).toEqual(3);
    });
    
    it('should return 0 if there is no students', () => {
        expect(getNumStudents([])).toEqual(0)
    });
    it('should return 1 if there is no students', () => {
        const dummyStudents = [{firstname : 'john', lastname: 'doe', age:30}]
        expect(getNumStudents(dummyStudents)).toEqual(1)
    });
    it('should return error message if received anything that is not an array', () => { 
        const expectederrormessage = 'received input is not an array of students';
        expect(getNumStudents(55)).toEqual(expectederrormessage)
        expect(getNumStudents('hello world')).toEqual(expectederrormessage)
        expect(getNumStudents(true)).toEqual(expectederrormessage)
        expect(getNumStudents({name: 'peter', lastname: 'parker'})).toEqual(expectederrormessage)
    });
});

describe('Students functions: getAverageAge', () => {
    it('should return the average age of all students', () => {
        expect(getAverageAge(students)).toEqual(25.333333333333332)
    });
  
    it('should return NaN if there are no students', () => {
        expect(getAverageAge([])).toEqual(NaN)
  
    });
  
    it('should return the age of the student if there is only one student', () => {
        const testStudent = [{firstname: 'john', lastname: 'doe', age: 20}]
        expect(getAverageAge(testStudent)).toEqual(20)
    });

  
    it('should return error message if received anything that is not an array', () => {
        const expectederrormessage = 'received input is not an array of students';
        expect(getAverageAge(55)).toEqual(expectederrormessage)
        expect(getAverageAge('hello world')).toEqual(expectederrormessage)
        expect(getAverageAge(true)).toEqual(expectederrormessage)
        expect(getAverageAge({name: 'peter', lastname: 'parker'})).toEqual(expectederrormessage)
    });
  });   
describe('Students functions: getoldeststudent', ()=>{
    it('should return the oldest student', () => {
        expect(getoldeststudent(students)).toEqual({"age": 30, "firstName": "Darren", "lastName": "Chen"})
    })
    it('should return undefined if there are no student', () => {
        expect(getoldeststudent([])).toEqual(undefined)
    })
    it('should return the age of student if theres is only one student', () => {
        const testStudent = [{name: 'john', lastname: 'Doe', age: '15'}]
        expect(getoldeststudent(testStudent)).toEqual({"age": "15", "lastname": "Doe", "name": "john"})
    })
    it('should return error message if received anything that is not an array', () => {
        const expectederrormessage = 'received input is not an array of students';
        expect(getoldeststudent(55)).toEqual(expectederrormessage)
        expect(getoldeststudent('hello world')).toEqual(expectederrormessage)
        expect(getoldeststudent(true)).toEqual(expectederrormessage)
        expect(getoldeststudent({name: 'peter', lastname: 'parker'})).toEqual(expectederrormessage)
    });
})
describe('Students functions: getYoungestStudent', ()=>{
    it('should return the youngest student', () => {
        expect(getYoungestStudent(students)).toEqual({"age": 18, "firstName": "Peter", "lastName": "Parker"})
    })
    it('should return undefined if there are no student', () => {
        expect(getYoungestStudent([])).toEqual(undefined)
    })
    it('should return the age of student if theres is only one student', () => {
        const testStudent = [{name: 'john', lastname: 'Doe', age: '15'}]
        expect(getYoungestStudent(testStudent)).toEqual({name: 'john', lastname: 'Doe', age: '15'})
    })
    it('should return error message if received anything that is not an array', () => {
        const expectederrormessage = 'received input is not an array of students';
        expect(getYoungestStudent(55)).toEqual(expectederrormessage)
        expect(getYoungestStudent('hello world')).toEqual(expectederrormessage)
        expect(getYoungestStudent(true)).toEqual(expectederrormessage)
        expect(getYoungestStudent({name: 'peter', lastname: 'parker'})).toEqual(expectederrormessage)
    });
})