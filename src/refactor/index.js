import $ from 'jquery'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'
import Text from './text'
import Input from './input'

window.store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const componentRegistry = {
  Text,
  Input,
}

$(() => {
  const reactComponents = $('[data-react-component]')

  $.each(reactComponents, function (index, obj) {
    // Retrieve the data attributes to use as component props
    const props = $(obj).data();

    // Get the component name of the `data-react-component` attribute
    const componentName = $(obj).data('reactComponent')

    // Find the component in the registry.
    const Component = componentRegistry[componentName]

    if (Component) {
      render(
        <Provider store={window.store}>
          <Component {...props} />
        </Provider>,
        obj
      )
    }
  })
})
