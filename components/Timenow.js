import React, {Component} from 'react';


class Timenow extends Component {

    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    
        this.getTime=this.getTime.bind(this);
        setInterval(this.getTime, 1000);
    } 
    
    getTime(){
        this.setState({ time: new Date().toLocaleTimeString()});
    }
    render() {
      return (
             <div className="header">
                    <h4 align="left" style={{color:"green"}}>Time:{this.state.time}</h4>      
            </div>
          );
    }
}
export default Timenow;