import React from "react";
import PropTypes from "prop-types";
import "../static-data";

function ListOfMessages({ messages }) {
  return (
    <ul className="ItemPage-items">
      {messages.map((item) => (
        <div> {item}</div>
      ))}
    </ul>
  );
}

ListOfMessages.propTypes = {
  messages: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default ListOfMessages;
