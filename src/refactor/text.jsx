import React, { Component } from 'react'
import { connect } from 'react-redux'

class Text extends Component {
  render() {
    const { isShown, message } = this.props
    return (
      isShown && ( <h1>{message}</h1> )
    )
  }
}

function mapStateToProps(state) {
  return {
    isShown: state.isShown,
    message: state.message
  }
}

export default connect(mapStateToProps)(Text)
