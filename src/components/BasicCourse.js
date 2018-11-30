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
           <div class="col-sm-2 sticky-top" style={{alignSelf: "flex-start", top:"60px"}} >

             <ul class="nav nav-pills flex-column" >
               <li class="nav-item">
                  <NavLink className="btn btn-dark btn-block" style={{color: 'white', textDecoration: 'none'}} to="/basiccourse">Overview</NavLink>
               </li>
                <li class="nav-item">
                  <NavLink className="btn btn-primary btn-block" style={{color: 'white', textDecoration: 'none'}} to="/basiccourse/nutrition">1) Nutrition</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="btn btn-primary btn-block" style={{color: 'white', textDecoration: 'none'}} to="/basiccourse/cooking">2) Cooking</NavLink>

                </li>
                <li class="nav-item">
                    <NavLink className="btn btn-primary btn-block" style={{color: 'white', textDecoration: 'none'}} to="/basiccourse/exercise">3) Exercise</NavLink>

                </li>
              </ul>
            </div>
            <div class="col-sm-10 card">
              {renderPage(this.props.match.params.param1)}
            </div>
          </div>
       </div>

    );
  }
}
