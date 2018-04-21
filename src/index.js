import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import "./index.css";
import App from "./App";
import Party from "./components/Party";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/create" component={Party} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
