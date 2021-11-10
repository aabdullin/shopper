import React from "react";
import { useLocation } from "react-router";

const Nav = ({ onTabChange }) => {
  const location = useLocation();
  const itemClass = (tabName) =>
    `App-nav-item ${location === tabName ? "selected" : ""}`;
  return (
    <nav className="App-nav">
      <ul>
        <li className={itemClass("items")}>
          <button onClick={() => onTabChange("items")}> Items</button>
        </li>
        <li className={itemClass("cart")}>
          <button onClick={() => onTabChange("cart")}>Cart</button>
        </li>
      </ul>{" "}
    </nav>
  );
};

export default Nav;
