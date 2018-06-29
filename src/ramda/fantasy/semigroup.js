const R = require('ramda')

//https://github.com/fantasyland/fantasy-land#semigroup

const Str = function(val) {
  this.val = val
}

Str.prototype.concat = function (str) {
  return new Str(this.val + str.val)
}

const s1 = new Str('foo')
const s2 = new Str('bar')
const s3 = s1.concat(s2)
const s4 = R.concat(s1, s2)

console.log(s1, s2, s3, s4)

