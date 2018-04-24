//https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/bridging_to_events.html
//Converting a DOM event to a RxJS Observable Sequence
// import React, { Component } from 'react'
// import Rx from 'rxjs/Rx'

// export default class App extends Component {
//   state = { x: 0, y: 0 }

//   componentDidMount() {
//     var src = Rx.Observable.fromEvent(document, 'mousemove')
//     var sub = src.subscribe(
//       e => this.setState({ x: e.clientX, y: e.clientY })
//     )
//   }

//   _onMouseMove = e => {
//     this.setState({ x: e.clientX, y: e.clientY })
//     // onMouseMove={this._onMouseMove}
//   }

//   render() {
//     const { x, y } = this.state
//     return (
//       <div className="App">
//         <h1>Mouse: {x} {y}</h1>
//       </div>
//     )
//   }
// }

///// ----------------------------- ///////
//Converting a Node.js event to a RxJS Observable Sequence
var Rx = require('rxjs'),
      EventEmitter = require('events').EventEmitter

var eventEmitter = new EventEmitter();

var src = Rx.Observable.fromEvent(eventEmitter, 'data')

var sub = src.subscribe(d => console.log('d: ', d))

eventEmitter.emit('data', 'foo')
