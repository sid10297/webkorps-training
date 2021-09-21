import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";

store.dispatch(addExpense({ description: "Dosa", amount: 120 }));
store.dispatch(addExpense({ description: "Paneer", amount: 200 }));
store.dispatch(
  addExpense({
    description: "test",
    amount: 500,
    note: "test note",
    createdAt: 1200,
  })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
