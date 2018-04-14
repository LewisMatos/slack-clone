import React, { Component } from "react";

export default class MessageBox extends Component {
  constructor(props) {
    super(props);
  }
  Messages = () => {
    var Message = { user1: { name: "lewis", text: " yo yo yo" }, user2: { name: "Carlos", text: "KlK" } };
    return Message;
  };
  render() {
    console.log(Messages());
    return;
    //  const listItems = Messages().Message.map(user => <li>{name}</li>);
    //return listItems;
  }
}
