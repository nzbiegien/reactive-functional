import React from 'react'
import { Observable } from 'rxjs'
import config from 'recompose/rxjsObservableConfig'
import { setObservableConfig, componentFromStream } from 'recompose'

// https://github.com/acdlite/recompose/pull/660
setObservableConfig(config)

const Recompose = componentFromStream(props$ =>
  Observable.interval(1000).map(count => <h1>Streaming... {count}</h1>)
)

export default Recompose
