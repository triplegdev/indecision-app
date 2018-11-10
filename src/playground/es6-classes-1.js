class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    // return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return  `${this.name} is ${this.age} years old!`;
  }

}

class Student extends Person {
  constructor(name, age, major = 'Liberal Arts') {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }

  // method override
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }

}

class Traveler extends Person{
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`
    }

    return greeting;
  }
}

const travMan = new Traveler('TonyG', 31);
console.log(travMan.getGreeting());

// const me = new Person('TonyG', 31);
// console.log(me.getDescription());
//
// const other = new Person();
// console.log(other.getDescription());
//
// const student = new Student('Tom', 31, 'Computer Science');
// console.log(student.getDescription());
//
// const laura = new Student('Laura', 24);
// console.log(laura.getDescription());
