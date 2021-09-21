import { useState, useReducer } from "react";
import { v1 } from "uuid";

const Form = (props) => {
  const [titleInputText, setTitleInputText] = useState(
    props.title ? props.title : ""
  );
  const [descriptionInputText, setDescriptionInputText] = useState(
    props.description ? props.description : ""
  );

  const onTitleInputTextChangeHandler = (e) => {
    const title = e.target.value;
    setTitleInputText(title);
  };

  const onDescriptionInputTextChangeHandler = (e) => {
    const description = e.target.value;
    setDescriptionInputText(description);
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: props.id ? props.id : v1(),
      title: titleInputText,
      description: descriptionInputText,
    };
    props.onSubmit(data);
  };

  return (
    <div>
      <form onSubmit={onFormSubmitHandler}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          onChange={onTitleInputTextChangeHandler}
          value={titleInputText}
        />
        <br />

        <input
          type="text"
          placeholder="Description"
          onChange={onDescriptionInputTextChangeHandler}
          value={descriptionInputText}
        />

        <br />

        <button disabled={!titleInputText && !descriptionInputText}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
