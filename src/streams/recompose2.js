import React from 'react'
import { Observable } from 'rxjs'
import config from 'recompose/rxjsObservableConfig'
import { setObservableConfig, componentFromStream } from 'recompose'

// https://github.com/acdlite/recompose/pull/660
setObservableConfig(config)

const App = props => <h1>{props.message}</h1>

const createTypeWriter = (message, speed) =>
  Observable.zip(
    Observable.from(message),
    Observable.interval(speed),
    letter => letter
  ).scan((acc, curr) => acc + curr)

const Recompose2 = componentFromStream(props$ =>
  props$
    .switchMap(props =>
      createTypeWriter(props.message, props.speed)
    )
    .map(message => ({ message }))
    .map(App)
)

const Recompose2Component =
  <Recompose2
    message='Streaming App...!'
    speed={500}
  />

export default Recompose2Component
