import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Nav from"./nav"
import Home from "./pages/home"
import Parks from "./pages/parks"
import Reviews from "./pages/reviews"
import NoMatch from "./pages/no-match";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/parks" component={Parks} />
          <Route path="/reviews" component={Reviews} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
