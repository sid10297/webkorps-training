import { createStore } from 'redux'

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + action.incrementBy
      }
    case 'MINUS':
      return { count: state.count - action.decrementBy }
    case 'RESET':
      return { count: action.resetCount }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unSubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// action generators using es6 object syntax

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'ADD',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'MINUS',
  decrementBy
})

const resetCount = ({ resetCount = 0 } = {}) => ({ type: 'RESET', resetCount })

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(decrementCount({ decrementBy: 20 }))
store.dispatch(resetCount({ resetCount: 100 }))
store.dispatch(incrementCount())
store.dispatch(incrementCount())

unSubscribe()
