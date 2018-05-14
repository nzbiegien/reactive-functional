const R = require('ramda');
//Handle Errors in Ramda Pipelines with tryCatch

const person = {
  name: 'Barti Kot'
}

const getNameOLD = R.tryCatch(R.prop('name'), R.always('Default')) //doesn't wokr

const getName = R.propOr('Default', 'name')
const getUpperName = R.pipe(getName, R.toUpper)

const result = getUpperName(person)
const result2 = getUpperName(undefined)
console.log(result)
console.log(result2)



