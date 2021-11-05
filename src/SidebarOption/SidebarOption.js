import React from "react";
import PropTypes from "prop-types";

const SidebarOption = ({ items, people }) => (
  <div className="SideBarOption">
    <div className="channels"> Channels </div>{" "}
    <ul>
      {items.map((item) => (
        <li className="channel"> {item.name}</li>
      ))}
    </ul>
    <div className="people"> People </div>{" "}
    <ul>
      {" "}
      {people.map((person) => (
        <li className="people"> {person.name}</li>
      ))}
    </ul>
  </div>
);

SidebarOption.propTypes = {
  item: PropTypes.object.isRequired,
  people: PropTypes.node,
};

export default SidebarOption;
