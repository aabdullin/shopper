import React, { useState } from "react";
import ReactDOM from "react-dom";
import MessageComponent from "./MessageComponent/MessageComponent";
import SidebarOption from "./SidebarOption/SidebarOption";
import { channels } from "./static-data";
import { people } from "./static-data-people";
import "./App.css";

const App = () => {
  const [activeChannel, setActiveChannel] = useState(channels[0]);

  return (
    <div className="App">
      <SidebarOption
        activeChannel={activeChannel}
        onChannelClicked={(channelName) => {
          setActiveChannel(channels.find((c) => c.name === channelName));
        }}
        items={channels}
        people={people}
      />
      <MessageComponent activeChannel={activeChannel} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
