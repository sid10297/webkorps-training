import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";
import ListItem from "./ListItem";

const List = () => {
  const { dataList, setDataList } = useContext(TodosContext);

  const deleteItem = (dataId) => {
    setDataList(() => dataList.filter(({ id }) => id !== dataId));
    console.log("data with id : ", dataId, " is deleted.");
  };

  return (
    <div>
      {dataList.length === 0 && <p>Add something to see in the dashboard</p>}
      {dataList.length > 0 &&
        dataList.map((dataItem) => (
          <ListItem
            key={dataItem.id}
            title={dataItem.title}
            description={dataItem.description}
            id={dataItem.id}
            deleteItem={deleteItem}
          />
        ))}
    </div>
  );
};

export default List;
