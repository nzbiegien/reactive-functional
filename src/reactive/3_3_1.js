//https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/creating_and_subscribing_to_simple_observable_sequences.html
const Rx = require('rxjs');

// const src = Rx.Observable.create(observer => {
//   observer.next(42)
//   observer.complete()

//   return () => console.log('unsubscrbie');
// })

// const subs = src.subscribe(
//   x => console.log(x),
//   e => console.log(e),
//   () => console.log('complete')
// )
// subs.unsubscribe()


///// ------------------------------------------ ////
// const src = Rx.Observable.range(1,5)
// const sub = src.subscribe(
//   x => console.log(x),
//   e => console.log(e),
//   () => console.log('complete')
// )

// const src = Rx.Observable.create(observer => {
//   for (let i = 0; i < 6; i++) {
//     observer.next(i);
//   }
//   observer.complete();
// });

// src.map(x => `ITEM = ${x}`).subscribe(x => console.log(x))


///// ------------------------------------------ ////
// console.log('Current time: ' + Date.now());

// var src = Rx.Observable.timer(
//   5000,
//   1000
// ).timestamp()

// var sub = src.subscribe(x => console.log(x.value + ': ' + x.timestamp))


///// ------------------------------------------ ////
// var src = Rx.Observable.from([1,2,3,4,5])

// var sub = src.subscribe(
//   x => console.log(x),
//   e => console.log(e),
//   () => console.log('complete')
// )


///// ------------------------------------------ ////
//Cold observables - start running upon subscription, values are also not shared among subscribers

// var src  = Rx.Observable.interval(1000)

// var sub1 = src.subscribe(
//   x => console.log('obs1 ', x),
//   e => console.log(e),
//   () => console.log('complete')
// )

// var sub2 = src.subscribe(
//   x => console.log('obs2 ', x),
//   e => console.log(e),
//   () => console.log('complete')
// )


///// ------------------------------------------ ////
// Hot observables -
// When an observer subscribes to a hot observable sequence,
// observer will get the current value in the stream.
// The hot observable sequence is shared among all subscribers,
// and each subscriber is pushed the next value in the sequenc

console.log('Current time: ', Date.now())
var src = Rx.Observable.interval(1000)

var hot = src.publish()

var sub1 = hot.subscribe(
  x => console.log('obs1: ', x),
  e => console.log(e),
  () => console.log('complete')
)

console.log('Current Time after 1st subscription: ' + Date.now())

setTimeout(() => {
  // Hot is connected to source and starts pushing value to subscribers
  hot.connect()
  console.log('Current Time after connect: ' + Date.now())

  setTimeout(() => {
    console.log('Current Time after 2nd subscription: ' + Date.now())
    var sub2 = hot.subscribe(
      x => console.log('obs2: ', x),
      e => console.log(e),
      () => console.log('complete')
    )
  }, 3000)
}, 3000)
