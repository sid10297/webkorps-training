import { createStore } from 'redux'
import { v1 as uuid } from 'uuid'

// action generator
const addTodo = ({ todo = '', note = '', isCompleted = false } = {}) => ({
  type: 'ADD_TODO',
  todo: {
    id: uuid(),
    isCompleted,
    todo,
    note
  }
})

const deleteTodo = ({ id }) => ({
  type: 'DELETE_TODO',
  id
})

const editTodo = (id, update) => ({
  type: 'EDIT_TODO',
  id,
  update
})

const showCompletedTodos = id => ({
  type: 'SHOW_COMPLETED_TODOS',
  id
})

const showUncompletedTodos = id => ({
  type: 'SHOW_UNCOMPLETED_TODOS',
  id
})

// reducer
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo]
    case 'DELETE_TODO':
      return state.filter(({ id }) => {
        return id !== action.id
      })
    case 'EDIT_TODO':
      return state.map(todoItem => {
        if (todoItem.id === action.id) {
          return {
            ...todoItem,
            ...action.update
          }
        } else {
          return todoItem
        }
      })

    case 'SHOW_COMPLETED_TODOS':
      return state.filter(todoItem => {
        if (todoItem.isCompleted === true) {
          return [...state]
        }
      })

    case 'SHOW_UNCOMPLETED_TODOS':
      return state.filter(todoItem => {
        if (todoItem.isCompleted === false) {
          return [...state]
        }
      })

    default:
      return state
  }
}

// create store
const store = createStore(todosReducer)

// subscribe
store.subscribe(() => {
  console.log(store.getState())
})

// dispatch
const todo1 = store.dispatch(
  addTodo({
    todo: 'fruits',
    note: 'buy apples',
    isCompleted: true
  })
)

const todo2 = store.dispatch(
  addTodo({
    todo: 'petrol',
    isCompleted: false
  })
)

store.dispatch(editTodo(todo1.todo.id, { note: 'buy apples and bananas' }))

store.dispatch(showCompletedTodos())

store.dispatch(showUncompletedTodos())

store.dispatch(
  deleteTodo({
    id: todo2.todo.id
  })
)
