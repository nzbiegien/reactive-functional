const R = require('ramda')
//Pick and Omit Properties from Objects Using Ramda

const product = {
  name: 'widget',
  price: 10,
  rating: '5.5',
  weight: '2 kg',
  weightCost: '10$'
}

const getProps = R.pick(['name', 'price', 'category']) //category omited
const getProps2 = R.pickAll(['name', 'price', 'category']) //category:undefined
const getProps3 = R.pickBy(val => Number(val)) //only numbers
const getProps4 = R.pickBy((val, key) => R.contains('weight', key))

console.log(getProps(product))
console.log(getProps2(product))
console.log(getProps3(product))
console.log(getProps4(product))

const omitProps = R.omit(['weight', 'weightCost'])
const omitProps2 = R.pickBy((val, key) => !R.contains('weight', key))

console.log(omitProps(product))
console.log(omitProps2(product))
