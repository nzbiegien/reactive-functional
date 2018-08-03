import React from 'react'
import ReactDOM from 'react-dom'

// Refactor Tests
import './refactor/legacy'
import './refactor'

import Browser from 'constants/routes'

ReactDOM.render(
  <Browser />,
  document.getElementById('root'),
)
