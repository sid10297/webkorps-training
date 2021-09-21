import React from "react";
import ConnectedExpenseList from "../components/ExpenseList";
import ExpenseListFilters from "../components/ExpenseListFilters";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ConnectedExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
