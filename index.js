
// const person = {
//   name: "Bob",
//   age: 32,
//   sayHello: function(name) {
//     console.log(`${this.name} says hi to ${name}!`)
//   }
// }

// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age,
//     sayHello: function(name) {
//       console.log(`${this.name} says hi to ${name}!`)
//     }
//   }
// }

// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// Person.prototype.sayHello = function(name) {
//   console.log(`${this.name} says hi to ${name}!`)
// }

class Owner {
  static all = []
  constructor(name, age) {
    this.name = name
    this.age = age
    this.pets = []
    Owner.all.push(this)
  }

  sayHello(name) {
    console.log(`${this.name} says hi to ${name}!`)
  }

  adopt(pet) {
    this.pets.push(pet)
    pet.owner = this
  }

  sayPetNames() {
    this.pets.forEach(pet => console.log(pet.name))
  }

  static sayHello(name) {
    this.all.forEach(owner => owner.sayHello(name))
  }
}

class Pet {
  static all = []
  constructor(name, species) {
    this.name = name
    this.species = species
    Pet.all.push(this)
  }

  sayOwner() {
    console.log(`Hi, my name is ${this.name}, I am a ${this.species}, my owner is ${this.owner.name}!`)
  }
}

// const person = createPerson("Bob", 32)
// const person2 = createPerson("Sarah", 28)
const carnegie = new Owner("Carnegie", 27)
const melissa = new Owner("Melissa", 26)

const toto = new Pet("Toto", "Dog")
const max = new Pet("Max", "Cat")
const moon = new Pet("Moon", "Cat")

// adoption process!

carnegie.adopt(max)
carnegie.adopt(moon)
melissa.adopt(toto)