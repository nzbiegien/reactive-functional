//https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/querying_observable_sequences.html
var Rx = require('rxjs')

// var src1 = Rx.Observable.range(1,3)
// var src2 = Rx.Observable.range(1,3)
// var src3 = Rx.Observable.throw(new Error('An error has occurred.'))

// src1.concat(src2)
//   .subscribe(console.log.bind(console)) //1,2,3 1,2,3

// src1.merge(src2)
//   .subscribe(console.log.bind(console)) //should be 112233

// src1.catch(src2)
//   .subscribe(console.log.bind(console))

// src3.onErrorResumeNext(src2)
//   .subscribe(console.log.bind(console))

// --------------------- //
// var array = ['Reactive', 'Extensions', 'RxJS'];
// var seqString = Rx.Observable.from(array)
// var seqNum = seqString.map(x => x.length)
// seqNum
//   .subscribe(console.log.bind(console))

// var src = Rx.Observable.interval(1000).take(2)
// var project = Rx.Observable.range(100,3)

// var resultSeq = src.map(x => {
//   // console.log(x, ' in: ', project);
//   return project
// }).concatAll() //flatMap = observable.map().concatAll()

// var resultSeq2 = src.flatMap(x => project)

// var sub = resultSeq2
//   .subscribe(console.log.bind(console)) //100 101 102 100 101 102

// --------------------- //
// var seq = Rx.Observable.generate(
//   0,
//   i => i < 10,
//   i => i + 1,
//   i => i * i)

// var src = seq.filter(n => n < 5)
// var sub = src
//   .subscribe(console.log.bind(console))

// --------------------- //
var seq = Rx.Observable.interval(1000);
// var bufSeq = seq.bufferCount(5)
var bufSeq = seq.bufferTime(3000).do(x => console.log('buffer is full'))

bufSeq
  .map(arr => arr.reduce((acc, curr) => acc + curr, 0))
  .subscribe(console.log.bind(console))
