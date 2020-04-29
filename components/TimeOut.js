import React, {Component} from 'react';
import history from '../common/history';


class Timeout extends Component {

    constructor(props){
        super(props);
        this.state = {
            remain:5

        };
    
        this.remainTime=this.remainTime.bind(this);
       this.intervalId = setInterval(this.remainTime, 1000);
      
        
    } 
    
    remainTime(){
      if(this.state.remain===0){
        history.push('/login');
        clearInterval(this.intervalId);
      }else{
          this.setState({remain: this.state.remain-1});
          
      }
      // console.log("remain:",this.state.remain);
        
    }
    render() {
      return (
             <div className="header">
                    <h4 align="left" style={{color:"red"}}>Wait:{this.state.remain}</h4>
                    <p>You are not login!</p>
            </div>
          );
    }
}
export default Timeout;