import React from "react";
import PropTypes from "prop-types";

function ListOfMessages({ messages }) {
  return (
    <ul className="messages">
      {messages.map((item) => (
        <div> {`${item.from}: ${item.message}`}</div>
      ))}
    </ul>
  );
}

ListOfMessages.propTypes = {
  messages: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default ListOfMessages;
