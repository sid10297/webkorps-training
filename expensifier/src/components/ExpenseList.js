import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <p>Expense List</p>
      {expenses.map((expense) => {
        return <ExpenseListItem {...expense} key={expense.id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
