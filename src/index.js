import React from "react";
import ReactDOM from "react-dom";
import styleMain from "./styles/main.css";
//import styleNormalize from "./styles/normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import resumeJson from "./resume";
import styleNormalize from "./styles/normalize.css";

// Components
import App from "./components/App";

ReactDOM.render(<App resumeJson={resumeJson} />, document.getElementById("app"));
