import React from "react";
import ReactDOM from "react-dom";
import ParentComponent from "./ParentComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
