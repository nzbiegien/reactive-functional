//https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/subjects.htmlvar
Rx = require('rxjs')

// var subject = new Rx.Subject()

// var sub = subject.subscribe(
//   x => console.log('Next: ' + x),
//   e => console.log('Error: ' + e.message),
//   () => console.log('Completed'))

// sub.next(1)
// sub.next(2)
// sub.complete()
// sub.unsubscribe()

// ----------------- //
var src = Rx.Observable.interval(1000)
// var subject = new Rx.Subject()
// var subject = new Rx.ReplaySubject()
// var subject = new Rx.BehaviorSubject('test')
var subject = new Rx.AsyncSubject()
var subSrc = src.subscribe(subject)

var subSubject1 = subject.subscribe(
  x => console.log('Value published to observer #1: ' + x),
  e => console.log('onError: ' + e.message),
  () => console.log('onCompleted'))

subSubject1.next(11111)
var subSubject2 = {}

setTimeout(() => {
  //HOT Observable Subject -> Replay/Behaviour/Asnyc diffrent
  subSubject2 = subject.subscribe(
    x => console.log('Value published to observer #2: ' + x),
    e => console.log('onError: ' + e.message),
    () => console.log('onCompleted'))
}, 3000);

setTimeout(() => {
    subject.complete()
    subSubject1.unsubscribe()
    subSubject2.unsubscribe()
  }, 5000);
