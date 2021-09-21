import { useContext } from "react";
import { useHistory } from "react-router";
import TodosContext from "../contexts/TodosContext";
import Form from "../components/Form";

const Create = () => {
  const { setDataList } = useContext(TodosContext);
  const history = useHistory();
  return (
    <div>
      <h1>Create</h1>
      <hr />
      <Form
        onSubmit={(data) => {
          setDataList((prevState) => {
            return [...prevState, data];
          });
          history.push("/");
        }}
      />
    </div>
  );
};

export default Create;
