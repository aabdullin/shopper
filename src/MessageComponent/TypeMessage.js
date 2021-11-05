import React from "react";
import PropTypes from "prop-types";

function TypeMessage({ messages, children }) {
  return <div></div>;
}

TypeMessage.propTypes = {
  messages: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default TypeMessage;
