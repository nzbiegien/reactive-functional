var R = require('ramda')
var look = require('ramda-debug')

R = look.wrap(R)

var getTypes = look.fov(function getTypes(fruits) {
  var getType = R.prop('type')
  var mapTypes = R.map(getType)

  return mapTypes(fruits)
})

getTypes([{ type: 'fruit' }])
