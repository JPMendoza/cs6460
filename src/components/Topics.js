import React from "react";

export default class Topics extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
       <div>
         <div class="card">
           <div class="card-header" id={this.props.topic.replace(/ /g,'')+"header"}>
             <h5 class="mb-0">
               <button class="btn btn-link collapsed" data-toggle="collapse" data-target={"#"+this.props.topic.replace(/ /g,'')+"collapse"} aria-expanded="false" aria-controls="collapseThree">
                 {this.props.topic}
               </button>
             </h5>
           </div>
           <div id={this.props.topic.replace(/ /g,'')+"collapse"} class="collapse" aria-labelledby={this.props.topic.replace(/ /g,'')+"header"} data-parent="#accordion">
             <div class="card-body">
               {this.props.content}
             </div>
           </div>
         </div>
       </div>

    );
  }

}
