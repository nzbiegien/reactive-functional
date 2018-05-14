const R = require('ramda');
//Refactor to Point Free Functions with Ramda using compose and converge

const person = {
  id: 11,
  name: 'Barti'
}

const generateUrl = id => `www.avatar.com/${id}`
const getUpdatedPerson = person => {
  const url = generateUrl(person.id)
  return R.assoc('avatar', url, person)
}

const result = getUpdatedPerson(person)
console.log(result)

const getUrlFromPerson = R.compose(generateUrl, R.propOr('default', 'id'))
const getUpdatedPerson2 = person => R.assoc('avatar', getUrlFromPerson(person), person) //old
const getUpdatedPerson3 = R.converge(R.assoc('avatar'), [getUrlFromPerson, R.identity])

const result2 = getUpdatedPerson3(person)
console.log(result2)
