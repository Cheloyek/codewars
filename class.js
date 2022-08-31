class Person {
  constructor(firstName = "John" , lastName = "Doe", age = 0, gender = "Male", raceName) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
    this.raceName = raceName
    }
    sayFullName() {
      return `${this.firstName} ${this.lastName}`

    }
    greetExtraTerrestrials() {
      return `Welcome to Planet Earth ${this.raceName}`
    }
}

const Person1 = new Person('fName','sName', 26, 'Male', 'Marcian')

Person1.sayFullName()
Person1.greetExtraTerrestrials()
