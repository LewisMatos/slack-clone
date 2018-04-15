import React from "react";
import ReactDOM from "react-dom";
import styleMain from "./styles/main.css";
import styleNormalize from "./styles/normalize.css";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

// Components
import ChatApp from "./components/ChatApp";

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <ChatApp />
</Provider>
    , document.getElementById("app"));
