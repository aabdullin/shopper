import React from "react";
import PropTypes from "prop-types";
import channels from "../static-data";

function ListOfMessages({ channels }) {
  return (
    <ul className="messages">
      {channels.map((item) => (
        <div> {item.messages}</div>
      ))}
    </ul>
  );
}

// ListOfMessages.propTypes = {
//   messages: PropTypes.object.isRequired,
//   children: PropTypes.node,
// };

export default ListOfMessages;
