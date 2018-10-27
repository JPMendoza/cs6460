import React from "react";
import {NavLink} from "react-router-dom"

export default class Nav extends React.Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">CS6460 </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <span class="nav-link"> <NavLink to="/cs6460">Home</NavLink></span>
            </li>
            <li class="nav-item">
              <span class="nav-link"><NavLink to="/basiccourse">Basic Course</NavLink></span>
            </li>
            <li class="nav-item dropdown">
              <span class="nav-link"><NavLink to="/funfacts">Fun Facts</NavLink></span>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Coming soon</a>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    );
  }

}
