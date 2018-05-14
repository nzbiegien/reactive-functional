const R = require('ramda')
//Declaratively Map Predicates to Object Properties Using Ramda where

var ppl = [
  { first: 'John', last: 'Doe', age: 50, eye: 'blue' },
  { first: 'Tom', last: 'Snow', age: 30, eye: 'green' },
  { first: 'Nick', last: 'Sand', age: 20, eye: 'red' },
  { first: 'Peter', last: 'Tree', age: 60, eye: 'red' }
]

const predicate = per => per.age === 20 && per.eye === 'red' //R.T
const predicate2 = R.where({
  age: R.lt(R.__, 50), // x < 50
  eye: R.equals('red')
})
const getResults = R.pipe(R.filter(predicate2), R.pluck('first'))

console.log(getResults(ppl))
