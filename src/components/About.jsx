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
      <div className="">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-6 m-4">About us</h1>
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
