import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <NavLink exact={true} activeClassName="isActive" to="/">
        Dashboard
      </NavLink>
      <NavLink activeClassName="isActive" to="/create">
        Create Expense
      </NavLink>
      <NavLink activeClassName="isActive" to="/edit">
        Edit Expense
      </NavLink>
      <NavLink activeClassName="isActive" to="/help">
        Help
      </NavLink>
    </div>
  );
};

export default Header;
