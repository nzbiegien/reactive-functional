import React from 'react'
import { Observable } from 'rxjs'
import config from 'recompose/rxjsObservableConfig'
import { setObservableConfig, componentFromStream } from 'recompose'

setObservableConfig(config)

const Recompose = componentFromStream(props$ =>
  Observable.interval(1000).map(count => <h1>Streaming... {count}</h1>)
)

export default Recompose
