import React from "react";
import PropTypes from "prop-types";
import ListOfMessages from "./ListOfMessages";
import TypeMessage from "./TypeMessage";

function MessageComponent({ activeChannel }) {
  return (
    <div>
      <ListOfMessages messages={activeChannel.messages} />
      <div className="type">
        <TypeMessage />
      </div>
    </div>
  );
}

MessageComponent.propTypes = {
  messages: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default MessageComponent;
