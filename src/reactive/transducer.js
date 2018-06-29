var Rx = require('rxjs')
var R = require('ramda')

//doesnt work from RxJS v5 (transduce)
var src = Rx.Observable.range(1, 4)

function increment(x) {
  return x + 1
}
function isEven(x) {
  return x % 2 === 0
}

var transducer = R.compose(
  R.map(increment),
  R.filter(isEven)
)

var sub = src.transduce(transducer).subscribe(x => {
  console.log('Next: %s', x)
})
