import React from "react";
import funfact from '../jsonfolder/funfact.json';
import putLink from './HelperFunctions.js';

export default class FunFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.facts = funfact;
    this.state = {fact: funfact[0]};
    this.previous = this.previous.bind(this);
    this.random = this.random.bind(this);
    this.next = this.next.bind(this);
    this.first = this.first.bind(this);
    this.last = this.last.bind(this);
  }
  previous() {
    if (this.facts.indexOf(this.state.fact) > 0) {
      let pv = this.facts.indexOf(this.state.fact) -1
      this.setState({fact: funfact[pv]});
    }
  }
  random() {
    let currentIndex = this.facts.indexOf(this.state.fact);
    let randomNum =  Math.floor(Math.random()*this.facts.length);
    while (currentIndex == randomNum) {
      randomNum =  Math.floor(Math.random()*this.facts.length);
    }
    this.setState({fact: funfact[randomNum]});
  }
  next() {
    if (this.facts.indexOf(this.state.fact) < this.facts.length-1) {
      let nt = this.facts.indexOf(this.state.fact)+1;
      this.setState({fact: funfact[nt]});
    }
  }
  first() {
        this.setState({fact: funfact[0]});
  }
  last() {
     this.setState({fact: funfact[this.facts.length-1]});
  }
  render() {
    return (
       <div style= {{textAlign: 'center'}}>
          <h1>Fun Facts</h1><hr/>
          (These facts are in no partular order)
          <div class="container" style= {{width: '70%',margin: 'auto',textAlign: 'center'}}>
            <div class="row">
              <div class="col">
                <button class="btn btn-default " onClick={this.first}>First</button> &nbsp;
                <button class="btn btn-info " onClick={this.previous} >Previous</button> &nbsp;
                <button class="btn btn-warning " onClick={this.random}>Random</button> &nbsp;
                <button class="btn btn-success " onClick={this.next}>Next</button> &nbsp;
                <button class="btn btn-default " onClick={this.last} >Last</button> &nbsp;
              </div>
            </div>
            <br/>
            <div class="row">
              <h5 class="col"> {this.state.fact.fact} </h5>

            </div>
            <div class="row">
              <p class="col"> {putLink(this.state.fact.reference)} </p>
            </div>

          </div>
       </div>

    );
  }

}
