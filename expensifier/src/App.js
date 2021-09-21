import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "./routers/ExpenseDashboardPage";
import Header from "./routers/Header";
import AddExpensePage from "./routers/AddExpensePage";
import EditExpensePage from "./routers/EditExpensePage";
import HelpPage from "./routers/HelpPage";
import NotFound from "./routers/NotFound";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage} />
        <Route exact path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route exact path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
