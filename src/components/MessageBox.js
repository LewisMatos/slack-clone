import React, { Component } from "react";

export default class MessageBox extends Component {
  constructor(props) {
    super(props);
  }

  fetchMessage = () => {
    var Message = [{ name: "lewis", text: " yo yo yo" }, { name: "Carlos", text: "KlK" }];
    const listItems = Message.map(user => (
      <div key={user.name}>
        <ul>
          <li>
            {user.name} : {user.text}
          </li>
        </ul>
      </div>
    ));
    return listItems;
  };

  render() {
    return this.fetchMessage();
  }
}
