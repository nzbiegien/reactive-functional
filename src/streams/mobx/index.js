import React from 'react'
import { Provider } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import Store from './store'
import App from './app'

const store = new Store()
if (process.env.NODE_ENV !== 'production') window.__STORE__ = store

const Mobx =
  <Provider store={store}>
      <React.Fragment>
        <App />
        <DevTools />
      </React.Fragment>
  </Provider>

export default Mobx
