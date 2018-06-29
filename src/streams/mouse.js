import React, { Component } from 'react'
import { Observable } from 'rxjs'
import 'rxjs/add/observable/fromEvent'

export default class Mouse extends Component {
  state = { x: 0, y: this.props.test }

  componentDidMount() {
    this.sub = Observable.fromEvent(document, 'mousemove')
      .subscribe(ev => this.setState({ x: ev.clientX, y: ev.clientY })
    )
  }

  componentWillUnmount() {
    if(this.sub) this.sub.unsubscribe()
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

