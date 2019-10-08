import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.css";

const App = () => {
  return <h1 id="test">My Minimal React Webpack Babel Setup test</h1>;
};
ReactDOM.render(<App />, document.getElementById("chat-app-module"));

module.hot.accept();
