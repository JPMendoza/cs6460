import React from "react";

function renderPart(props) {
//  if (isEmpty(props.media)) {
//    return <>
//  } else {

//  }

}


export default class Subtopics extends React.Component {
  constructor(props) {
    super(props);
    var sub = this.props.subtopics;
    console.log(this.props.subtopics);

  }
  render() {
    return (
       <div>
       <ul>
          {this.props.subtopics.map(subtopic => (
            <li>
               {subtopic.title}
               <ul>
                 {subtopic.parts.map(part => (
                   <li>
                     {part}
                   </li>
                 ))}
               </ul>
               <p>  {subtopic.ref ? "References: " + subtopic.ref : ""} </p>
            </li>
          ))}
          </ul>
       </div>

    );
  }

}
