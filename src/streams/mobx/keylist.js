import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Observable, Subject } from 'rxjs'
import 'rxjs/add/observable/interval'
import 'rxjs/add/observable/zip'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/startWith'

import { toStream } from './utils'

@inject('store')
@observer
class KeyList extends Component {

  // keys$ = new Subject()

  componentDidMount() {
    // this.$sub = Observable.from(toStream(() => this.props.store.text))

    // this.sub$ = this.keys$
    //   .subscribe(key => this.resolveKey(key))

  }

  handleChange = e => {
    this.props.store.setText(e.target.value)
  }

  // handleKeyDown = e => {
  //   this.keys$.next(e.keyCode)
  // }


  resolveKey = (e) => {
    const { cursor } = this.props.store
    const results = [{ name: '11'} , { name: '22' }, { name:'33' }, { name:'44' }]
    // const results = []

    if(!results.length) return

    if (e.keyCode === 38 && cursor > -1) { //down
      this.props.store.setCursor(cursor - 1)
      e.preventDefault()
    }
    else if (e.keyCode === 40 && cursor < results.length - 1) { //up
      this.props.store.setCursor(cursor + 1)
    }
    else if(e.keyCode === 13 && cursor > -1) { //enter
      alert(results[cursor].name)
    }
    else if(e.keyCode === 13 && cursor === -1) { //enter, on input
      this.props.store.setCursor(0) //set on first
    }
  }


  render() {
    const { cursor } = this.props.store
    const results = [{ name: '11'} , { name: '22' }, { name:'33' }, { name:'44' }]

    return(
      <div>
        <input value={this.props.store.text} onKeyDown={this.resolveKey} onChange={this.handleChange} />
        <ul>
        {
          results.map((x, i) => (
            <li
              key={ i }
              className={cursor === i ? 'active' : null}
              style={cursor === i ? { color: 'red' } : null}
            >
              <span>{ x.name }</span>
            </li>
          ))
        }
        </ul>
      </div>
    )
  }
}


export default KeyList
