/*class user {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    decrement(score) {
        if (score > 0) return score--;
    }

    icrement(score) {
        return score++;
    }
}




class Animal {
    constructor(name) {
        this.name = name;

    }
    run() {
        this.speed = speed;
        console.log(`${this.name} is running at ${this.speed} km/h`);
    }
    stop () {
        this.speed = 0;
        console.log(`${this.name} has stopped running`);
    }
}
class rabbit extends Animal {
    hide() {
        console.log(`${this.name} is hiding`);
    }
    stop() {
        console.log(`${this.name} has stopped running`);
        super.stop();
    }
}

const newRabbit = new rabbit("Rabbit",stop());
console.log(newRabbit); */

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        console.log(`This is a ${this.year} ${this.make} ${this.model}`);
    }
}
const newCar = new car("Toyota", "Corolla", 2020);
console.log(newCar.displayInfo())


class Dog {
    constructor (name,breed) {
        this.name = name;
        this.breed = breed;
    }
    bark() {
        console.log("woof","woof")
    }
}


class Calculator {

    add(a,b) {
        console.log(a+b)
    }
    sub (a,b) {
        console.log(a-b)
    }
    div (a,b) {
        console.log(a/b)
    }
    mul (a,b) {
        console.log(a*b)
    }
}


class Person {
    constructor (name,age)  {
        this.name = name;
        this.age = age;
    }
    intruduce () {
        console.log(`im ${this.name} and im ${this.age} years old`)
    }
}
class Students extends Person {
    study() {
        console.log(`im ${this.name} studys`)
    }
}



class Book {
    constructor (title,author) {
        this.title = title;
        this.author = author;
    }
    describe () {
        console.log(`${this.title} was written by ${this.author}`)
    }
}