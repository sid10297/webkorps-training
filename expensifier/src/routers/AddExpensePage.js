import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

const AddExpensePage = ({ dispatch, history }) => {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
          history.push("/");
        }}
      />
    </div>
  );
};

const ConnectedAddExpensePage = connect()(AddExpensePage);

export default ConnectedAddExpensePage;
