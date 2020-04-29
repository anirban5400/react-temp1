import React, { Component } from 'react';
import history from '../common/history';
import './Calculator.css';

class G1 extends Component {
  constructor(props){
    super(props);
    this.state={
      system:null,
      user:null,
      count:0
    }
  }

  handleClick=(value)=>{
    

  }

  
render(){
  console.log(this.state.count);
  return(<>
  heoolo!
    <div>
    <table>
    <tbody>
      <tr>
        <td onClick={this.handleClick(1)}>1</td>
        <td onClick={this.handleClick(2)}>2</td>
        <td onClick={this.handleClick(3)}>3</td>
      </tr>
      <tr>
        <td onClick={this.handleClick(4)}>4</td>
        <td onClick={this.handleClick(5)}>5</td>
        <td onClick={this.handleClick(6)}>6</td>
      </tr>
      <tr>
        <td onClick={this.handleClick(7)}>7</td>
        <td onClick={this.handleClick(8)}>8</td>
        <td onClick={this.handleClick(9)}>9</td>
      </tr>
    </tbody>
    </table>
    
    </div>
  </>)
}
}

export default G1;