import React, { Component } from 'react'
import Rx from 'rxjs/Rx'

export default class Mouse extends Component {
  state = { x: 0, y: 0 }

  componentDidMount() {
    var src = Rx.Observable.fromEvent(document, 'mousemove')
    var sub = src.subscribe(
      e => this.setState({ x: e.clientX, y: e.clientY })
    )
  }

  _onMouseMove = e => {
    this.setState({ x: e.clientX, y: e.clientY })
    // onMouseMove={this._onMouseMove}
  }

  render() {
    const { x, y } = this.state
    return (
      <div>
        <h1>Mouse: {x} {y}</h1>
      </div>
    )
  }
}

