import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Create from "./screens/Create";
import Dashboard from "./screens/Dashboard";
import EditPage from "./screens/Edit";
import Header from "./components/Header";
import NotFoundPage from "./components/NotFoundPage";
import TodosContext from "./contexts/TodosContext";

const App = () => {
  const [dataList, setDataList] = useState([]);
  const value = { dataList, setDataList };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <hr />
        <Switch>
          <TodosContext.Provider value={value}>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/edit/:id">
              <EditPage />
            </Route>
          </TodosContext.Provider>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
