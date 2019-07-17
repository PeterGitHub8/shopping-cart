import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;