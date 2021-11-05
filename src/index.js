import React, { useState } from "react";
import ReactDOM from "react-dom";
import MessageComponent from "./MessageComponent/MessageComponent";

const App = () => {
  return (
    <div className="App">
      <MessageComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
