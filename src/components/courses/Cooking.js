import React from "react";
import Outline from "../Outline";
import Topics from "../Topics";
import cookingoutline from '../../jsonfolder/cookingoutline.json';
import cookingtopics from '../../jsonfolder/cookingtopics.json';
import Quiz from '../quiz/Quiz'
export default class Cooking extends React.Component {
  render() {
    let outline = cookingoutline;
    let topics = cookingtopics;
    return (
       <div style={{paddingTop: "8px"}}>Cooking <br/>
       <hr/>
       Cooking Learning objectives: <br/>
          &nbsp; By the end of this course you should be able to <br/>
          <ul>
            <li>Better understand what kitchen tools are good/necessary for cooking and food prep</li>
            <li>Better identify food produce and products</li>
            <li>Learn more about proper prepping food and cooking food</li>
            <li>Learn food prepping skills and cooking skills</li>
            <li>Better understand what kitchen tools are good/necessary for cooking and food prep</li>
            <li>get able to find more resources on how to prepare different types of food and find more recipes</li>
          </ul>

          <hr/>
           <div id="accordion">
             <div class="card">
               <div class="card-header" id="headingOne">
                 <h5 class="mb-0">
                   <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                     Cooking learning outline
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
                     <Quiz input="../data/cookingquiz1.json" />
                     In app coming Soon <br/>please see link
                     <a target="blank" href="https://docs.google.com/forms/d/15V0SmkqRjYrQKZlPSSJD6oFuoMeNIVsoaJ0fRv6Tf8I"> Quiz </a>
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
