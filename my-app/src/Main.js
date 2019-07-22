import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;