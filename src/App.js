import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout
          render={appProps => (
            <div>
              <h1>SWAPI</h1>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
