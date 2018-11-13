import React from "react";
import ref from '../jsonfolder/references.json';

export default class References extends React.Component {
  render() {
    let refs = ref;

    return (
      <div>
          <div style= {{textAlign: 'center'}}>
             <h1>References</h1><hr/>

             <div class="container-fluid" style= {{width: '50%',margin: 'auto',textAlign: 'center'}}>
             These are all source materal i grabed all my information from. Please feel
             free to look at the references i have compiled <br/><br/>
               <div class="row">
                <ol>
                {refs.map(r => (
                  <li>
                    {r.listname}
                    <ol>
                     {r.list.map(l =>(
                       <li>
                        {l}
                       </li>
                     ))}
                    </ol>
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
