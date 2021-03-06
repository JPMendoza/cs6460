import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import BasicCourse from "./components/BasicCourse"
import FunFacts from "./components/FunFacts"
import Error from "./components/Error"
import References from "./components/References"
import Nav from "./components/Nav"



class App extends Component {
  render() {

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div class="container">
          <Nav/>
          <div style={{paddingTop:"60px"}}>
          <Switch >
            <Route exact path='/' component={Home}/>
            <Route path="/basiccourse/:param1?" component={BasicCourse}/>
            <Route path="/funfacts" component={FunFacts}/>
            <Route path="/references" component={References}/>
            <Route component={Error}/>
          </Switch>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
