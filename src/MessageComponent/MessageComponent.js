import React from "react";
import PropTypes from "prop-types";
import ListOfMessages from "./ListOfMessages";
import TypeMessage from "./TypeMessage";
import channels from "../static-data.js";

function MessageComponent({ items, children }) {
  return (
    <div>
      <ListOfMessages items={channels} />
      <TypeMessage />
    </div>
  );
}

MessageComponent.propTypes = {
  messages: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default MessageComponent;
