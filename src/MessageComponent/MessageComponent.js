import React from "react";
import PropTypes from "prop-types";
import ListOfMessages from "./ListOfMessages";
import TypeMessage from "./TypeMessage";
import channels from "../static-data";

function MessageComponent({ messages, children }) {
  return (
    <div>
      <ListOfMessages messages={channels} />
      <TypeMessage />
    </div>
  );
}

MessageComponent.propTypes = {
  messages: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default MessageComponent;
