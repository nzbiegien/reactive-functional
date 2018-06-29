import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Mouse from 'streams/mouse'
// import Recompose from 'streams/recompose'
// import Recompose2Component from 'streams/recompose2'
import Mobx from 'streams/mobx'

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
        <li>
          <Link to='/mobx'>Mobx</Link>
        </li>
      </ul>

      <hr />

      <Route exact path='/mouse' render={() => <Mouse test="test" />} />
      {/* <Route exact path='/recompose' component={Recompose} />
      <Route exact path='/recompose2' render={ () => Recompose2Component} /> */}
      <Route exact path='/mobx' render={() => Mobx} />

    </div>
  </Router>
)

export default Browser
