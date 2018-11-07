import React from "react";

export default class Topics extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
       <div>
         <div class="card">
           <div class="card-header" id="headingThree">
             <h5 class="mb-0">
               <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 Topic test
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

    );
  }

}
