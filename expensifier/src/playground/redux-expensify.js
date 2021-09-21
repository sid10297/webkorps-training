// import { createStore, combineReducers } from 'redux'
// import { v1 as uuid } from 'uuid'

// // action generators
// const addExpense = ({
//   description = '',
//   note = '',
//   amount = 0,
//   createdAt = 0
// } = {}) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// })

// const removeExpense = ({ id } = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// })

// const editExpense = (id, update) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   update
// })

// const setTextFilter = (text = '') => ({
//   type: 'FILTER_TEXT',
//   text
// })

// const sortByAmount = () => ({
//   type: 'SORT_BY_AMOUNT'
// })

// const sortByDate = () => ({
//   type: 'SORT_BY_DATE'
// })

// const setStartDate = startDate => ({
//   type: 'SET_START_DATE',
//   startDate
// })

// const setEndDate = endDate => ({
//   type: 'SET_END_DATE',
//   endDate
// })

// const expenserReducerDefaultState = []

// const expensesReducer = (state = expenserReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_EXPENSE':
//       return [...state, action.expense]
//     case 'REMOVE_EXPENSE':
//       return state.filter(({ id }) => id !== action.id)
//     case 'EDIT_EXPENSE':
//       return state.map(expense => {
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.update
//           }
//         } else {
//           return expense
//         }
//       })
//     default:
//       return state
//   }
// }

// const filterReducerDefaultState = {
//   text: '',
//   sortBy: 'date',
//   startDate: undefined,
//   endDate: undefined
// }

// const filterReducer = (state = filterReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'FILTER_TEXT':
//       return {
//         ...state,
//         text: action.text
//       }
//     case 'SORT_BY_AMOUNT':
//       return {
//         ...state,
//         sortBy: 'amount'
//       }
//     case 'SORT_BY_DATE':
//       return {
//         ...state,
//         sortBy: 'date'
//       }
//     case 'SET_START_DATE':
//       return {
//         ...state,
//         startDate: action.startDate
//       }
//     case 'SET_END_DATE':
//       return {
//         ...state,
//         endDate: action.endDate
//       }
//     default:
//       return state
//   }
// }

// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses
//     .filter(expense => {
//       const startDateMatch =
//         typeof startDate !== 'number' || expense.createdAt >= startDate
//       const endDateMatch =
//         typeof startDate !== 'number' || expense.createdAt <= endDate
//       const textMatch = expense.description
//         .toLowerCase()
//         .includes(text.toLowerCase())

//       return startDateMatch && endDateMatch && textMatch
//     })
//     .sort((a, b) => {
//       if (sortBy === 'date') {
//         return a.createdAt < b.createdAt ? 1 : -1
//       } else if (sortBy === 'amount') {
//         return a.amount < b.amount ? 1 : -1
//       }
//     })
// }

// export const store = createStore(
//   combineReducers({ expenses: expensesReducer, filters: filterReducer })
// )

// const unsubscribe = store.subscribe(() => {
//   const state = store.getState()
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//   console.log(visibleExpenses)
// })

// const expense1 = store.dispatch(
//   addExpense({
//     description: 'rent',
//     amount: 10000,
//     createdAt: -5000
//   })
// )

// const expense2 = store.dispatch(
//   addExpense({
//     description: 'charges',
//     amount: 12000,
//     createdAt: -1000
//   })
// )

// // store.dispatch(
// //   removeExpense({
// //     id: expense2.expense.id
// //   })
// // )

// // store.dispatch(editExpense(expense1.expense.id, { amount: 5 }))

// // store.dispatch(setTextFilter('rent'))

// // store.dispatch(setTextFilter('a'))

// store.dispatch(sortByAmount())

// // store.dispatch(sortByDate())

// // store.dispatch(setStartDate(125))

// // store.dispatch(setStartDate(0))

// // store.dispatch(setEndDate(1250))

// // store.dispatch(setEndDate())

// unsubscribe()
