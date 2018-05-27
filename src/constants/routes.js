import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Mouse from 'streams/mouse'
import Recompose from 'streams/recompose'
import Recompose2Component from 'streams/recompose2'

const Browser = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/mouse'>Mouse</Link>
        </li>
        <li>
          <Link to='/recompose'>Recompose</Link>
        </li>
        <li>
          <Link to='/recompose2'>Recompose 2</Link>
        </li>
      </ul>

      <hr />

      <Route exact path='/mouse' component={Mouse} />
      <Route exact path='/recompose' component={Recompose} />
      <Route exact path='/recompose2' render={ () => Recompose2Component} />

    </div>
  </Router>
)

export default Browser
