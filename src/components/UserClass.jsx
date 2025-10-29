import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: 'Dummy'
      },
    };
  }
  async componentDidMount() {
    const data =  await fetch("https://api.github.com/users/bhuvan-react");
    const json = await data.json();
    this.setState({
        userInfo: json
    })
  }
  componentDidUpdate(){
    console.log('component did update')
  }
  componentWillUnmount(){
    console.log('component will unmount')
  }
  render() {
    const { name, location, id, avatar_url } = this.state.userInfo
    return (
      <div className="user-info">
        <h1>Count: {this.state.count}</h1>
        <img src={avatar_url} />  
        <h2>Name: {name} </h2>
        <h3>Location: {location}</h3>
        <h4>ID: {id}</h4>
      </div>
    );
  }
}

export default UserClass;

/* 
  
  --- MOUNTING Life Cycle ---
  Constructor (Dummy)
  Render (Dummy)
    <HTML> Dummy </HTML>

  ComponentDidMount 
    <API Call> 
    this.setState()

  --- UPDATE Cycle ---
    
    render(API data) 
    <HTML (new API Data)>
    componentDidUpdate 
*/
