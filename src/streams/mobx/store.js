import { observable, action } from 'mobx'

export default class Store {

  @observable text = 'default text'

  @action
  setText(text) {
    this.text = text
  }
}
