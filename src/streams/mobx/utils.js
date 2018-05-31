import { computed } from 'mobx'

function observableSymbol() {
    return (typeof Symbol === "function" && Symbol.observable) || "@@observable"
}

export function toStream(expression) {
    const computedValue = computed(expression)
    return {
        subscribe(observer){
            return {
                unsubscribe: computedValue.observe(
                    typeof observer === "function"
                        ? ({ newValue }) => observer(newValue)
                        : ({ newValue }) => observer.next(newValue)
                )
            }
        },
        [observableSymbol()]: function self() { return this }
    }
}
