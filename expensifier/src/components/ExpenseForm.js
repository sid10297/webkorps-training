import { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const ExpenseForm = ({ onSubmit, expense }) => {
  const [description, setDescription] = useState(
    expense ? expense.description : ""
  );
  const [amount, setAmount] = useState(expense ? expense.amount : "");
  const [note, setNote] = useState(expense ? expense.note : "");
  const [createdAt, setCreatedAt] = useState(
    expense ? moment(expense.createdAt) : moment()
  );
  const [calenderFocused, setCalenderFoucused] = useState(false);
  const [showError, setShowError] = useState("");

  const handleDescription = (e) => {
    if (description) {
      console.log(description);
    }
    const desc = e.target.value;
    setDescription(() => {
      return desc;
    });
  };

  const handleAmount = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(() => {
        return amount;
      });
    }
  };
  const handleNote = (e) => {
    const note = e.target.value;
    setNote(() => {
      return note;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      setShowError("please fill required fields");
    } else {
      setShowError("");
      onSubmit({
        description: description,
        amount: parseFloat(amount, 10),
        createdAt: createdAt.valueOf(),
        note: note,
      });
    }
  };

  const onDateChange = (createdAt) => {
    if (createdAt) {
      setCreatedAt(createdAt);
    }
  };

  const onFocusChange = () => {
    setCalenderFoucused(!calenderFocused);
  };

  return (
    <div>
      {showError && <p>Please fill required fields</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={handleDescription}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={handleAmount}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={calenderFocused}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Note: Optional"
          value={note}
          onChange={handleNote}
        />
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
