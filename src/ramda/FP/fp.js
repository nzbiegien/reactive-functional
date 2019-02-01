// [ array... ].reduce( (acc, cur) => newAcc , initValAcc ) */right-left
//compose
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

const g = n => n + 1
const f = n => n * 2

const h2 = x => f(g(x))
h2(20) //?

const h = compose(f,g)
h(20) //?


//trace
const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value
}

const h3 = compose(
  trace('after f'),
  f,
  trace('after g'),
  g
)

h3(20) //?


// [ array... ].reduce( (acc, cur) => newAcc , initValAcc ) */left-right
//pipe
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

const h4 = pipe(g, f)
h4(20) //?

//flip
const flip = fn => a => b => fn(b)(a)
const flipTraced = flip(trace)
flipTraced('val')('label') //?
trace('val')('label') //?

// reduce
const mapR = (fn, arr) =>  arr.reduce((acc, cur) => acc.concat(fn(cur)) ,[])
mapR(x => x * 2, [1,2,3]) //?

const filterR = (fn, arr) => arr.reduce((acc, cur) => fn(cur) ? acc.concat(cur) : acc, [])
filterR(x => x < 2, [1, 2, 3]) //?

