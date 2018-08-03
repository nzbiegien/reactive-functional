import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { isShown, message } = this.props
    return (
      isShown && ( <input type="text" value={message} /> )
    )
  }
}
