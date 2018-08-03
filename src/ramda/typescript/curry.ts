function add(a: number, b: number): number
function add(a: number): (b: number) => number

function add(...args: any[]): any {
  return null as any
}

type OverloadedAdd = typeof add

// ----------------

type Curry1 = (a: number) => number

type Curry2 = {
  (a: number): Curry1
  (a: number): (b: number) => number;
}

declare const add2: Curry2
declare const mul: Curry2
declare const div: Curry2
