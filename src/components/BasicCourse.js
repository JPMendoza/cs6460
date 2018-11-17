import React from "react";
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
       <div class="container">
         <div class="row">
           <div class="col-sm-2">
             <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="nav-link active" >
                   <NavLink to="/basiccourse">Overview</NavLink>
                  </span>
                </li>
                <li class="nav-item">
                 <span class="nav-link active" >
                  <NavLink to="/basiccourse/nutrition">1) Nutrition</NavLink>
                 </span>
                </li>
                <li class="nav-item">
                  <span class="nav-link active" >
                    <NavLink to="/basiccourse/cooking">2) Cooking</NavLink>
                  </span>
                </li>
                <li class="nav-item">
                  <span class="nav-link active" >
                    <NavLink to="/basiccourse/exercise">3) Exercise</NavLink>
                  </span>
                </li>
              </ul>
            </div>
            <div class="col-sm-10">
              {renderPage(this.props.match.params.param1)}
            </div>
          </div>
       </div>

    );
  }
}
