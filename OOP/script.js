'use strict';

const Person = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear);
    // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// New empty object is created
// function is called, this = {}
// {} linked to prototype
// function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);