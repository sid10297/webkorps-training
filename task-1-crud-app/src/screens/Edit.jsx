import { useContext } from "react";
import { useHistory, useParams } from "react-router";
import TodosContext from "../contexts/TodosContext";
import Form from "../components/Form";
import NotFoundPage from "../components/NotFoundPage";

const EditPage = () => {
  const { dataList, setDataList } = useContext(TodosContext);
  const { id } = useParams();
  const history = useHistory();
  let dataId = id.substring(1);
  console.log(dataId);

  return (
    <div>
      <h1>Edit page</h1>
      <hr />
      {dataList.map((dataItem) => dataItem.id === dataId) ? (
        dataList.map(
          (data) =>
            data.id === dataId && (
              <Form
                title={data.title}
                key={data.id}
                description={data.description}
                id={data.id}
                dataList
                onSubmit={(newData) => {
                  setDataList((dataList) =>
                    dataList.map((data) => {
                      if (data.id === dataId) {
                        return { data, ...newData };
                      }
                      return data;
                    })
                  );
                  history.push("/");
                }}
              />
            )
        )
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

export default EditPage;
