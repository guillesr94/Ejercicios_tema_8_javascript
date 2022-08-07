// Clases

class Person {
  constructor(first, last, telephone,) {
    this.name=first;
    this.age=last;
    this.telephone=telephone;
  }

  info() {
    console.log(`Hi! I'm ${this.name},I am ${this.age} and my telephone is ${this.telephone}`);
  };

}
let person = new Person('Susan',23, 25231316);
person.info();




