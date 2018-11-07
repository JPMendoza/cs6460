
import Outline from "../Outline";
import Topics from "../Topics";
import React from "react";

export default class Nutrition extends React.Component {
  render() {
    let outline = [
      { name: "Challenge your current knowledge on nutrition", point:
        [{name: "Identifying what is nutrition", point: [1]},
          {name: "Identifying what is nutrition", point: [1,2]}] },
      { name: "Challenge your current knowledge on nutrition", point:
        [{name: "Identifying what is nutrition", point: []}] },
      { name: "Challenge your current knowledge on nutrition", point:
        [{name: "Identifying what is nutrition", point: []}]  }
    ];
    return (

       <div style={{paddingTop: "8px"}}>Nutrition <br/>

       <hr/>
         Nutrition Learning objectives: <br/>
            &nbsp; By the end of this course you should be able to <br/>
            <ul>
              <li>Understand basic nutrition for yourself</li>
              <li>Understand buzzwords around Nutrition</li>
              <li>Better identify the difference between fads and new research around nutrition</li>
              <li>Use what you learn in this course to help you make better decisions around nutrition</li>
            </ul>
       <hr/>
        <div id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Nutrition Outline
                </button>
              </h5>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                In app coming Soon <br/>please see link
                <a target="blank" href="https://docs.google.com/document/d/1IlmxbuuUtwV08SU8MQhkUe_hHxANUtFBi_wG5MU_47o"> outline </a>
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
                  In app coming Soon <br/>please see link
                  <a target="blank" href="https://docs.google.com/forms/d/1DVlBUFSy0H6EjwCEwiSeKzRoGlMvX-zlL7y1QoBw5A8"> Quiz </a>
                </div>
            </div>
          </div>
          <Topics />
        </div>
       </div>
    );
  }

}
