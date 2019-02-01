import { compose, filter, map, into } from 'ramda'

const arr = [1,2,3,4,5,6]

const isEven = x => x % 2 === 0
const double = x => x * 2

const doubleEvens = compose(
  filter(isEven),
  map(double),
)

const result = into([], doubleEvens, arr) //?

///// ------------- /////
const map2 = f => step => (a, c) => step(a, f(c))

const doubleMap = map2(double)

const step = (a, c) => c

doubleMap(step)(0, 4) //?
doubleMap(step)(0, 21) //?
