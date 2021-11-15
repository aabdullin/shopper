import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Nav = ({}) => {
  const location = useLocation();
  console.log(location);
  const itemClass = (tabName) =>
    `App-nav-item ${location.pathname === tabName ? "selected" : ""}`;
  return (
    <nav className="App-nav">
      <ul>
        <li className={itemClass("/item")}>
          <Link to="/item">Item </Link>{" "}
        </li>
        <li className={itemClass("/cart")}>
          <Link to="/cart">Cart </Link>{" "}
        </li>
      </ul>{" "}
    </nav>
  );
};

export default Nav;
