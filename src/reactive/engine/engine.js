// Getters/setters way of observing and reacting to changes

function Seer(dataObj) {
  let signals = {}

  observeData(dataObj)

  return {
    data: dataObj,
    observe,
    notify
  }

  function observe(property, signalHandler) {
    if (!signals[property]) signals[property] = []

    signals[property].push(signalHandler)
  }

  function notify(signal) {
    if (!signals[signal] || signals[signal].length < 1) return

    signals[signal].forEach(signalHandler => signalHandler())
  }

  function makeReactive(obj, key) {
    let val = obj[key]

    Object.defineProperty(obj, key, {
      get() {
        return val
      },
      set(newVal) {
        val = newVal
        notify(key)
      }
    })
  }

  function observeData(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        makeReactive(obj, key)
      }
    }

    // parseDOM(document.body, obj)
  }

  // function syncNode(node, observable, property) {
  //   node.textContent = observable[property]
  //   observe(property, () => node.textContent = observable[property])
  // }

  // function parseDOM(node, observable) {
  //   const nodes = document.querySelectorAll('[s-text]')

  //   nodes.forEach(node => {
  //     syncNode(node, observable, node.attributes['s-text'].value)
  //   })
  // }

}

const App = new Seer({
  firstName: 'John',
  lastName: 'Smith',
  age: 25
})

App.observe('firstName', () => console.log('FirstName: ' + App.data.firstName))
App.observe('lastName', () => console.log('LastName: ' + App.data.lastName))

App.data.firstName = 'Jon'
App.data.lastName = 'Snow'
