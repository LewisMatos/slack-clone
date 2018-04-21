/**
 * @flow
 */

import React, { Component } from "react";

export default class MessageCompose extends Component {
  state = {
    input: "",
  };

  onInputChange = (e: any) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    const message = {
      name: "guy1",
      text: this.state.input,
    };

    this.props.handleNewMessageSent(message);
    this.setState({
      input: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.onInputChange} placeholder="Type your message here!!!" />
        </form>
      </div>
    );
  }
}
