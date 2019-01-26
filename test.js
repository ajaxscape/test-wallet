const faker = require('faker')
faker.seed(1233)

class Person {
  static get people () { return this._people || (this._people = []) }
  get name () { return this._name || (this._name = faker.name.findName()) }
  get email () { return this._email || (this._email = faker.internet.email()) }
  get phone () { return this._card || (this._card = faker.phone.phoneNumber()) }
  get account () { return this._account || (this._account = faker.finance.account()) }
}

for (let i = 0; i < 10; i++) {
  Person.people.push(new Person())
}

Person.people.forEach((person) => {
  console.log()
  const props = ['name', 'email', 'phone', 'account']
  props.forEach((prop) => console.log(`${prop.charAt(0).toUpperCase() + prop.slice(1)}: ${person[prop]}`))
})
