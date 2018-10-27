import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Layout from "./components/Layout"
import Home from "./components/Home"
import BasicCourse from "./components/BasicCourse"
import FunFacts from "./components/FunFacts"
import Error from "./components/Error"
import Nav from "./components/Nav"



class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div class="container">
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/basiccourse" component={BasicCourse}/>
            <Route path="/funfacts" component={FunFacts}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
