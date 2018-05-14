const R = require('ramda')
//Get Deeply Nested Properties Safely with Ramda's path and pathOr Functions

const user = {
  id: 101,
  email: 'jack@dev.com',
  personalInfo: {
    name: 'Jack',
    address: {
      line1: 'westwish st',
      line2: 'washmasher',
      city: 'wallas',
      state: 'WX'
    }
  }
}

const getUserCity = R.path(['personalInfo', 'address', 'city'])
const getUserTown = R.pathOr('Sydney', ['personalInfo', 'address', 'town'])

console.log(getUserCity(user))
console.log(getUserTown(user))
