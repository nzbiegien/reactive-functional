import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
// import { toStream } from 'mobx-utils'
import { Observable } from 'rxjs'
import 'rxjs/add/observable/interval'
import 'rxjs/add/observable/zip'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/startWith'

import { toStream } from './utils'
import KeyList from './keylist'

@inject('store')
@observer
class Mobx extends Component {

  componentDidMount() {
    // const createTypeWriter = (message, speed) =>
    //   Observable.zip(
    //     Observable.from(message),
    //     Observable.interval(speed),
    //     letter => letter
    //   ).scan((acc, curr) => acc + curr)

    // this.mouse$ = Observable.fromEvent(document.body, 'mousedown')
    //   .switchMap(ev =>
    //     createTypeWriter(this.props.store.text, 500)
    //   )
    //   .subscribe(letter => this.props.store.setText(letter))

    // this.sub$ = Observable.from(toStream(() => this.props.store.text))
    //   // .startWith('test')
    //   .subscribe(x => {
    //     console.log(x)
    //     this.props.store.setLabel(x+x)
    //   })
    //   // .map(message => ({ message }))
    //   // .map(App)

    //   // this.props.store.setText('dupa')

    //   setTimeout(() => this.props.store.setText('AMIGO'), 2000);
  }

  componentWillUnmount() {
    if(this.mouse$) this.mouse$.unsubscribe()
  }

  render() {
    return(
      <div>
        {/* <h1>Label: {this.props.store.label}</h1>
        <h2>Text: {this.props.store.text}</h2>
        <h3>CompText: {this.props.store.textComp}</h3> */}
        <KeyList />
      </div>
    )
  }
}

export default Mobx
