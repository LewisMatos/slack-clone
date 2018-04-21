import React, { Component } from "react";
import Nav from "./Nav";
import Profile from "./Profile";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Education from "./Education";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Profile />
        <Work />
        <Education />
        <Skills />
        <About />
      </div>
    );
  }
}

export default App;
