import { NavLink } from "react-router-dom";

const ListItem = (props) => {
  const { id, title, description, deleteItem } = props;
  const onDeleteItemHandler = () => {
    deleteItem(id);
  };

  return (
    <div>
      <hr />
      <div>
        <h2>{title}</h2>
        <p>{description} </p>
        <button onClick={onDeleteItemHandler}>Delete</button>
        <NavLink to={`/edit/:${id}`}>
          <button>Edit</button>
        </NavLink>
      </div>
      <hr />
    </div>
  );
};

export default ListItem;
