import React, { Component } from "react";
import { connect } from 'react-redux';

// Components
import MessageBox from "./MessageBox";
import MessageCompose from "./MessageCompose"

class ChatApp extends Component {

  state = {
    messages : []
  }

  componentDidMount() {
    this.setState({
      messages: this.props.messages
    })
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

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(ChatApp)
