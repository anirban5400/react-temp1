import React, { Component } from 'react';
import history from '../common/history';
import './Calculator.css';

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}


class Calculator extends Component {
  constructor(props){
    super(props);
    this.state={
                input:"",
                currentValue:"",
                nextInput:"",
                stateOperator:"",
                outPut:null
                }
    this.handleChange=this.handleChange.bind(this);
    this.removeInput=this.removeInput.bind(this);
    this.handleInput=this.handleInput.bind(this);
    this.handleOperator=this.handleOperator.bind(this);
    
    
  }
  
  handleChange(e){
    this.setState({input: e.target.value});
  }
  removeInput(){
    if(this.state.input==''){
      this.setState({outPut:null});
    }
    this.setState({input:''});
    this.setState({currentValue:''});
    this.setState({nextInput:''});
  }
  handleInput(value){ 
    if(this.state.stateOperator ==='='){
      this.removeInput();
      this.setState({stateOperator:''});
      this.setState({input:value});
      this.setState({currentValue:value});
    }else{
      this.setState({input:this.state.input+value});
      this.setState({currentValue:this.state.currentValue+value});
    }
    
    // ()=>console.log(this.state.input.split("")),
    
    
  }
  handleOperator(operator){
    // console.log(this.state.input.split(''));
    let inputArray=this.state.input.split('');
    let inputLast=inputArray[inputArray.length-1];
    if(inputLast==="/" || inputLast==="*" || inputLast==="-" || inputLast==="+" || inputLast==="=" ){
      let inputReplace=this.state.input.replace(/.$/,operator);
      this.setState({input:inputReplace});
      this.setState({stateOperator:operator});
    }else{
      if(this.state.currentValue!=""){
        this.setState({nextInput:this.state.currentValue});
        this.setState({currentValue:""});
      }
      this.setState({input:this.state.input+operator});
      if(this.state.stateOperator==""){
        this.setState({stateOperator:operator});
      }else{
          if(this.state.nextInput!=""){
            const newValue = CalculatorOperations[this.state.stateOperator](Number(this.state.nextInput), Number(this.state.currentValue));
            if(String(newValue)==="Infinity"){
              this.setState({outPut:"Can't divide by Zero"});
            }else{
              this.setState({nextInput:String(newValue)});
              this.setState({outPut:newValue});
            }
          }
          this.setState({stateOperator:operator});
      }
    }
  }

  render(){
    
    // console.log(this.state);
    
    return(
      <div>
        <button onClick={()=>(history.push('/'))}>Home</button>
         
        <table>
        
          <tbody>
            <tr>
              <td style={{height:"0px"}}
                  colSpan="4">
                  <input type="text" 
                    onChange={this.handleChange} 
                    value={this.state.input}
                    readOnly/>
              </td>
            </tr>
            <tr>
              <td style={{height:"25px"}} colSpan="4">{this.state.outPut}</td>
            </tr>
              <tr>
                <td onClick={this.removeInput} title='Double Click to Clean All!'>C</td>
                <td onClick={()=>this.handleOperator("/")} >/</td>
                <td onClick={()=>this.handleOperator("*")} >*</td>
                <td onClick={()=>this.handleOperator("-")} >-</td>
              </tr>
              <tr>
                <td onClick={()=>this.handleInput("7")} >7</td>
                <td onClick={()=>this.handleInput("8")} >8</td>
                <td onClick={()=>this.handleInput("9")} >9</td>
                <td rowSpan="2" onClick={()=>this.handleOperator("+")} >+</td>
              </tr>
              <tr>
                <td onClick={()=>this.handleInput("4")} >4</td>
                <td onClick={()=>this.handleInput("5")} >5</td>
                <td onClick={()=>this.handleInput("6")} >6</td>
              </tr>
              <tr>
                <td onClick={()=>this.handleInput("1")} >1</td>
                <td onClick={()=>this.handleInput("2")} >2</td>
                <td onClick={()=>this.handleInput("3")} >3</td>
                <td rowSpan="2" onClick={()=>this.handleOperator("=")}>=</td>
              </tr>
              <tr>
                <td colSpan="2" onClick={()=>this.handleInput("0")} >0</td>
                <td onClick={()=>this.handleInput(".")} >.</td>
              </tr>
             
            
          </tbody>
        </table>
      
      </div>
      
     
    )
  }
}
export default Calculator;