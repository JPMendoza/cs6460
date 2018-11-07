import React from "react";


export default class Outline extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    let outline = this.props.outline;
    return (
      <div>

      <ol>
        {outline.map(level1 => (
          <li>
            {level1.name}
            <ol type="A">{level1.point.map(level2 =>(
                <li>
                  {level2.name}
                  <ol type="i"> {level2.point.map(level3 =>(

                      <li>
                        {level3}
                      </li>
                    )
                   )}
                   </ol>
                </li>
              )
             )}
             </ol>
          </li>
        ))}
      </ol>
      </div>
    );
  }

}
