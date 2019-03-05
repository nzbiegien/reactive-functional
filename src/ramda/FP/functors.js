// ---- Functors ----

// Identity
const a = [20]
const b = a.map(a => a)
a.toString() === b.toString() //?

// Composition (f*g)(x) = f(g(x))
const g = n => n + 1
const f = n => n * 2
const mappable = [20]

const aa = mappable.map(g).map(f)
const bb = mappable.map(x => f(g(x)))

aa.toString() === bb.toString() //?

// -- Own functor --
const Identity = value => ({
  map: fn => Identity(fn(value))
})

const trace = x => {
  console.log(x)
  return x
}

const u = Identity(2)

// Identity law
const r1 = u
const r2 = u.map(x => x)
r1.map(trace)
r2.map(trace)

// Composition law
const r3 = u.map(x => f(g(x)))
const r4 = u.map(g).map(f)
r3.map(trace)
r4.map(trace)


// -- Curried Map --

const curry = (f, arr = []) => (...args) => (
  a => a.length === f.length ? f(...a) : curry(f, a)
)([...arr, ...args])

const map = curry((fn, mappable) => mappable.map(fn))
const double = n => n * 2
const mdouble = map(double)

mdouble(Identity(4)).map(trace)
mdouble([4]).map(trace)
