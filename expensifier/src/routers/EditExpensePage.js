import React from "react";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";
import ExpenseForm from "../components/ExpenseForm";
import { removeExpense } from "../actions/expenses";

const EditExpensePage = ({ expense, dispatch, history }) => {
  return (
    <div>
      <h1>Edit expense page</h1>
      <ExpenseForm
        expense={expense}
        onSubmit={(updatedExpense) => {
          dispatch(editExpense(expense.id, updatedExpense));
          history.push("/");
        }}
      />
      <button
        onClick={() => {
          dispatch(removeExpense({ id: expense.id }));
          history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
