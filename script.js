// Base class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // getter for age
  get age() {
    return this._age;
  }

  // setter for age
  set age(age) {
    this._age = age;
  }

  // setter for name (optional, for completeness)
  set name(name) {
    this._name = name;
  }
}

// Student class inherits from Person
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class inherits from Person
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage:

// Person
const person = new Person("John", 25);
console.log(person.name);   // John
person.age = 30;            // setter
console.log(person.age);    // 30

// Student
const student = new Student("Alice", 22);
student.study();            // Alice is studying

// Teacher
const teacher = new Teacher("Bob", 40);
teacher.teach();            // Bob is teaching

