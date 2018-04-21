/**
 * @flow
 */

import React, { Component } from "react";

export default class MessageBox extends Component {
  fetchMessage = () =>
    this.props.messages.map((message, index) => (
      <li key={index}>
        {message.name} : {message.text}
      </li>
    ));

  render() {
    return (
      <div>
        <ul>{this.fetchMessage()}</ul>
      </div>
    );
  }
}
