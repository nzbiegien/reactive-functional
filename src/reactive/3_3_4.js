// https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/bridging_to_promises.html
var Rx = require('rxjs')

var src = Rx.Observable.range(0,3)
  .flatMap(x => Promise.resolve(x * x))

var sub = src.subscribe(
  x => console.log(x),
  e => console.log(e),
  () => console.log('complete')
)
