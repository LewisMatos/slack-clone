import React, { Component } from "react";
import MessageBox from "./MessageBox";

export default class ChatApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="grid-container">
        <div className="message-box">
          <MessageBox />
        </div>
      </div>
    );
  }
}
