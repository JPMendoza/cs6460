import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom"
import {NavLink} from "react-router-dom"
import Nutrition from "./courses/Nutrition"
import Exercise from "./courses/Exercise"
import Cooking from "./courses/Cooking"
import Index from "./courses/Index"

function renderPage (input) {
  if (input === "cooking") {
    return <Cooking />;
  } else if (input === "exercise") {
    return <Exercise />;
  } else if (input === "nutrition") {
    return <Nutrition />;
  } else {
    return <Index />;
  }

}

export default class BasicCourse extends React.Component {
  constructor(props){
    super();
  }
  render() {
    return (
       <div class="container-fluid">
       <div class="row">
         <div>
         <ul class="nav flex-column">
            <li class="nav-item">
              <span class="nav-link active" >
               <NavLink to="/basiccourse/">Overview</NavLink>
              </span>
            </li>
            <li class="nav-item">
             <span class="nav-link active" >
              <NavLink to="/basiccourse/nutrition">Nutrition</NavLink>
             </span>
            </li>
            <li class="nav-item">
              <span class="nav-link active" >
                <NavLink to="/basiccourse/cooking">Cooking</NavLink>
              </span>
            </li>
            <li class="nav-item">
              <span class="nav-link active" >
                <NavLink to="/basiccourse/exercise">Exercise</NavLink>
              </span>
            </li>
          </ul>
          </div>
          <div>
            {renderPage(this.props.match.params.param1)}
          </div>
        </div>
       </div>

    );
  }
}
