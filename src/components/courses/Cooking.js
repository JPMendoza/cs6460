import React from "react";

export default class Cooking extends React.Component {
  render() {
    return (
       <div style={{paddingTop: "8px"}}>Cooking <br/>
       <hr/>
       Cooking Learning objectives: <br/>
          &nbsp; By the end of this course you should be able to <br/>
          <ul>
            <li>Learn common food prep skills</li>
            <li>Learn common cooking skills</li>
            <li>Better identify food produce and products</li>
            <li>Better understand what kitchen tools are good/necessary for cooking and food prep</li>
            <li>get able to find more resources on how to prepare different types of food and find more recipes</li>
          </ul>

          <hr/>
           <div id="accordion">
             <div class="card">
               <div class="card-header" id="headingOne">
                 <h5 class="mb-0">
                   <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     Cooking learning outline
                   </button>
                 </h5>
               </div>

               <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                 <div class="card-body">
                   In app coming Soon <br/>please see link
                   <a target="blank" href="https://docs.google.com/document/d/1mqbL4fvwKShBYXmfs3ObHnYtdFjceATNYHvDTIJLmyE"> outline </a>
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
                     In app coming Soon <br/>please see link
                     <a target="blank" href="https://docs.google.com/forms/d/15V0SmkqRjYrQKZlPSSJD6oFuoMeNIVsoaJ0fRv6Tf8I"> Quiz </a>
                   </div>
               </div>
             </div>
             <div class="card">
               <div class="card-header" id="headingThree">
                 <h5 class="mb-0">
                   <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                     Topic 1
                   </button>
                 </h5>
               </div>
               <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                 <div class="card-body">
                   Comming soon
                 </div>
               </div>
             </div>
           </div>
       </div>
    );
  }

}
