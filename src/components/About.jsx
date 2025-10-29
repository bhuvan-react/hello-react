import React, { Component } from "react";
import UserClass from "./UserClass";
class About extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }
  render(){
    return(
      <div>
      About us Page
      <UserClass />
    </div>
    )
  }
}

export default About;

/* 

- Parent constructor  
- Parent render

  - child1 constructor
  - child1 render 

  - child2 constructor
  - child2 render 

  - child3 constructor
  - child3 render 

  <DOM is updated - SINGLE BATCH>

  - child1, child2 and child3 componentDidMount.

  React optimizes it by batch child condtructor and render is called render phase and then commit phase hapens is nothing but cdm os c1,c2,c3

*/
