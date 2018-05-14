const R = require('ramda');
//Refactor to a Point Free Function with Ramda's useWith Function

const countries = [
  { cc: 'PL', flag: '🇵🇱🇧'},
  { cc: 'GB', flag: '🇬🇧'},
  { cc: 'AUS', flag: '🇦🇺'},
  { cc: 'COL', flag: '🇨🇴'}
]

const getCountry = (cc, list) => R.find(R.propEq('cc', cc), list)
const getCountry2 = R.useWith(R.find, [R.propEq('cc'), R.identity]) //identity default can omit

const result = getCountry2('AUS', countries)
console.log(result)
