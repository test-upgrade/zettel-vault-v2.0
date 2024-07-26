import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./page";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LandingPage />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
