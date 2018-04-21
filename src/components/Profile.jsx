import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.resumeJson, null, 2)}</pre>
      </div>
    );
  }
}

export default Profile;
