const R = require('ramda');
//Debug Function Compositions with Ramda's Tap Function

const queryString = '?page=2&pageSize=10&total=203'
const log = R.tap(console.log)

const parseQs = R.compose(
  R.fromPairs,
  log,
  R.map(R.split('=')),
  log,
  R.split('&'),
  R.tail
)

const result = parseQs(queryString)

console.log(result)
