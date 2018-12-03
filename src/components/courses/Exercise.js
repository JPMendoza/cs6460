import React from "react";
import Outline from "../Outline";
import Topics from "../Topics";
import Quiz from '../quiz/Quiz'
import exerciseoutline from '../../jsonfolder/exerciseoutline.json';
import exercisetopics from '../../jsonfolder/exercisetopics.json';
export default class Exercise extends React.Component {
  render() {
    let outline = exerciseoutline;
    let topics = exercisetopics;
    return (
       <div style={{paddingTop: "8px"}}>Exercise <br/>

       <hr/>
        Exercise Learning objectives: <br/>
          &nbsp; By the end of this course you should be able to <br/>
          <ul>
            <li>Understand what kind of exercise you may need</li>
            <li>Understand the difference between anaerobic vs aerobic exercise</li>
            <li>Better identify good workout vs bad workouts</li>
            <li>How to put together a route for yourself</li>
          </ul>
          <hr/>
           <div id="accordion">
             <div class="card">
               <div class="card-header" id="headingOne">
                 <h5 class="mb-0">
                   <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     Exercise Outline
                   </button>
                 </h5>
               </div>

               <div id="collapseOne" class="collapse collapsed" aria-labelledby="headingOne" data-parent="#accordion">
                 <div class="card-body">
                   <Outline outline={outline}/>
                 </div>
               </div>
             </div>
             <div class="card">
               <div class="card-header" id="headingTwo">
                 <h5 class="mb-0">
                   <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                     Test your current knowledge
                   </button>
                 </h5>
               </div>
               <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                 <div class="card-body">
                     <Quiz input="../data/nutritionquiz1.json" />
                   </div>
               </div>
             </div>
             {topics.map(topic => (
               <div>
                 <Topics topic={topic.topic} content={topic.content} subtopics={topic.subtopics} />
               </div>
             ))}
           </div>

       </div>
    );
  }

}
