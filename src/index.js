import React, { useState } from "react";
import ReactDOM from "react-dom";
import MessageComponent from "./MessageComponent/MessageComponent";
import SidebarOption from "./SidebarOption/SidebarOption";
import { channels } from "./static-data";
import { people } from "./static-data-people";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SidebarOption items={channels} people={people} />
      <MessageComponent/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
