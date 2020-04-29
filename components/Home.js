import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import history from '../common/history';

class Home extends Component {

  render(){
    return(
      
      <div>Home...
      <div>
        <button><Link to='/login'>Login</Link></button>
        <button><Link to='/dog'>Dog</Link></button>
        <button><Link to='/calculator'>Calculator</Link></button>
        
      </div>
      <div>
      <button onClick={()=>(history.push('/cat'))}>Cat</button>
      </div>
      </div>
    )
  }
}
export default Home;