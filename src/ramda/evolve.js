const R = require('ramda')
//Declaratively Map Data Transformations to Object Properties Using Ramda evolve

const user = {
  id: 101,
  email: 'jack@dev.com',
  personalInfo: {
    name: 'Jack',
    address: {
      line1: 500,
      line2: 'washmasher',
      city: 'wallas',
      state: 'WX'
    }
  }
}

const adjustUser = p => R.merge(p, { email: R.toUpper(p.email)})
const adjustUser2 = R.evolve({
  email: R.toUpper,
  id: R.multiply(2),
  personalInfo: {
    address: {
      line1: R.inc
    }
  }
})

console.log(adjustUser2(user));
