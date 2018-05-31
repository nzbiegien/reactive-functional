import { observable, action, computed } from 'mobx'

export default class Store {

  @observable text = 'default text'
  @observable label = 'default label'

  @computed get textComp() {
    return this.text
  }

  @action
  setText(text) {
    this.text = text
  }
  @action
  setLabel(label) {
    this.label = label
  }
}
