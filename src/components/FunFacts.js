import React from "react";
import funfact from '../jsonfolder/funfact.json';



export default class FunFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.facts = funfact;
    this.state = {fact: funfact[0]};
    console.log(this.facts);
    console.log("array position is " + this.facts.indexOf(this.state.fact));
    this.previous = this.previous.bind(this);
    this.random = this.random.bind(this);
    this.next = this.next.bind(this);
  }
  previous() {
    console.log("Previous was clicked");
    if (this.facts.indexOf(this.state.fact) > 0) {
      let pv = this.facts.indexOf(this.state.fact) -1
      this.setState({fact: funfact[pv]});
    }
  }
  random() {
    console.log("Random was clicked");
    let currentIndex = this.facts.indexOf(this.state.fact);
    let randomNum =  Math.floor(Math.random()*this.facts.length);
    while (currentIndex == randomNum) {
      randomNum =  Math.floor(Math.random()*this.facts.length);
    }
    this.setState({fact: funfact[randomNum]});
  }
  next() {
    console.log("Random was clicked");
    if (this.facts.indexOf(this.state.fact) < this.facts.length-1) {
      let nt = this.facts.indexOf(this.state.fact)+1;
      this.setState({fact: funfact[nt]});
    }
  }
  render() {
    const center = {
      marginLeft: "auto",
      marginRight: "auto" // 'ms' is the only lowercase vendor prefix
    };
    return (
       <div style= {{textAlign: 'center'}}>
          <h1>Fun Facts</h1><hr/>

          <div class="container-fluid" style= {{width: '50%',margin: 'auto',textAlign: 'center'}}>
            <div class="row">
              <h3 class="col"> {this.state.fact.fact} </h3>

            </div>
            <div class="row">
              <p class="col"> {this.state.fact.reference} </p>
            </div>
            <div class="row">
              <button class="btn btn-info col" onClick={this.previous} >Previous</button> &nbsp;
              <button class="btn btn-warning col" onClick={this.random}>Random</button> &nbsp;
              <button class="btn btn-success col" onClick={this.next}>Next</button> &nbsp;
            </div>

          </div>
       </div>

    );
  }

}
