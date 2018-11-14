import React from "react";
import ref from '../jsonfolder/references.json';
import putLink from './HelperFunctions.js';



export default class References extends React.Component {
  render() {
    let refs = ref;

    return (
      <div>
          <div >
             <h1 style= {{textAlign: 'center'}}>References</h1><hr/>

             <div class="container-fluid" style= {{width: '70%',margin: 'auto'}}>
             These are all source materal i grabed all my information from. Please feel
             free to look at the references i have compiled <br/><br/>
               <div class="row">
                <ol>
                {refs.map(r => (
                  <li>
                    {r.listname}
                    <ul>
                     {r.list.map(l =>(
                       <li>
                        {putLink(l)}
                       </li>
                     ))}
                    </ul>
                  </li>

                ))}
                </ol>
                 <p class="col">  </p>
               </div>


             </div>
          </div>
       </div>

    );
  }

}
