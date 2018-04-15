import React, { Component } from "react";

// Components
import MessageBox from "./MessageBox";
import MessageCompose from "./MessageCompose"

export default class ChatApp extends Component {

  state = {
    messages : [{ name: "lewis", text: " yo yo yo" }, { name: "Carlos", text: "KlK" }]
  }

  onNewMessageSent = (newMessage) => {

    let newMessageState = [...this.state.messages, newMessage]

    this.setState({
      messages: newMessageState
    });
  }

  render() {

    return (
      <div className="grid-container">
        <div className="message-box">
          <MessageBox messages={this.state.messages} />
        </div>
        <div className="chatwindow">
          <MessageCompose handleNewMessageSent={this.onNewMessageSent}/>
        </div>
      </div>
    );
  }
}
