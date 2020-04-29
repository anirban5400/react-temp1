import React, { Component } from 'react';
import history from '../common/history';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date(),start:new Date().valueOf()};
    console.log("constructor");

  }
  // componentDidMount() {
  //   console.log("componentDidMount");
  //   console.log("component start -> ",this.state.start);
  //   console.log("load end -> ",new Date().valueOf());
  //   console.log(new Date().valueOf() - this.state.start );
    
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
    
    
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  //   clearInterval(this.timerID);
  //   console.log("component start -> ",new Date(this.state.start).toLocaleTimeString());
  //   console.log("component Close -> ",new Date().toLocaleTimeString());
  //   console.log("close after: ",new Date().valueOf() - this.state.start);
  // }

  // tick() {
  //   this.setState({
  //     date: new Date()
  //   });
  // }


  render(){
    // console.log("render");
    
    return(
      <div>
        <h1>Hello, world!</h1>
        <button><Link to='/'>Home</Link></button>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Sidebar;


// uniq = [...new Set(array)];