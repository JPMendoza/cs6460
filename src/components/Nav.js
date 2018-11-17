import React from "react";
import {NavLink} from "react-router-dom"

export default class Nav extends React.Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand">NEC</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <span class="nav-link"> <NavLink to="/">Home</NavLink></span>
            </li>
            <li class="nav-item">
              <span class="nav-link"><NavLink to="/basiccourse">Basic Course</NavLink></span>
            </li>
            <li class="nav-item dropdown">
              <span class="nav-link"><NavLink to="/funfacts">Fun Facts</NavLink></span>
            </li>
            <li class="nav-item dropdown">
              <span class="nav-link"><NavLink to="/references">References</NavLink></span>
            </li>
            <li class="nav-item">
              <span class="nav-link disabled" >Coming soon</span>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    );
  }

}
