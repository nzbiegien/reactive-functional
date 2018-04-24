// https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/bridging_to_promises.html
var Rx = require('rxjs')

// var src = Rx.Observable.range(0,3)
//   .flatMap(x => Promise.resolve(x * x))

// var sub = src.subscribe(
//   x => console.log(x),
//   e => console.log(e),
//   () => console.log('complete')
// )

// ------------------- //
// var promise = new Promise((resolve, reject) => reject(42))
// var src = Rx.Observable.fromPromise(promise)

// var sub = src.subscribe(
//   x => console.log(x),
//   e => console.log(e),
//   () => console.log('complete')
// )

// ------------------- //
var src = Rx.Observable.of(11).toPromise(Promise)
var src2 = Rx.Observable.throw(22).toPromise(Promise)

src2.then(
  resolve => console.log(resolve),
  reject => console.log('err: ', reject),
)
