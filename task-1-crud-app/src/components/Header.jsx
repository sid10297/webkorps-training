import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="link-is-active" exact>
        Dashboard
      </NavLink>
      <br />
      <NavLink to="/create" activeClassName="link-is-active">
        Create
      </NavLink>
    </div>
  );
};

export default Header;
