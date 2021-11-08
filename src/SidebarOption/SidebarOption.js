import React from "react";
import PropTypes from "prop-types";

const SidebarOption = ({ activeChannel, onChannelClicked, items, people }) => (
  <div className="SideBarOption">
    <div className="channels"> Channels </div>{" "}
    <ul>
      {items.map((item) => (
        <li
          className={
            activeChannel.name === item.name ? "activeChannel" : "channel"
          }
          onClick={() => {
            onChannelClicked(item.name);
          }}
        >
          {" "}
          {item.name}
        </li>
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
