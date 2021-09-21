import { useState } from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

const ExpenseListFilters = ({ filters, dispatch }) => {
  const [calenderFocused, setCalenderFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };
  const onFocusChange = (calenderFocused) => {
    setCalenderFocused(calenderFocused);
  };
  console.log(filters);

  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        value={filters.sortBy}
        onChange={(e) => {
          dispatch(e.target.value === "date" ? sortByDate() : sortByAmount());
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={filters.startDate}
        endDate={filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={calenderFocused}
        onFocusChange={onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
const ConnectedFilters = connect(mapStateToProps)(ExpenseListFilters);

export default ConnectedFilters;
