import { Link } from "react-router-dom";

const ExpenseListItem = ({ description, amount, createdAt, id, note }) => {
  return (
    <div>
      <Link to={`edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>{note}</p>
      <p>Rs {amount}</p>
      <p>{createdAt}: unix format</p>
    </div>
  );
};

export default ExpenseListItem;
