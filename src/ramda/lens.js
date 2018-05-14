const R = require('ramda');
//Change Object Properties with Ramda Lenses

const person = {
  first: 'Bartosz',
  last: 'Kot'
}

const fLensLong = R.lens(R.prop('first'), R.assoc('first'))
const fLens = R.lensProp('first') //shorter version

const result1 = R.view(fLens, person) //getter
const result2 = R.set(fLens, 'Janusz', person) //setter

console.log(result1)
console.log(result2)
console.log(person)

const first = R.view(fLens, person)
const upper = R.toUpper(first)
const result3 = R.set(fLens, upper, person)
const result4 = R.over(fLens, R.toUpper, person) //shorter version

console.log(result3)
console.log(result4)

