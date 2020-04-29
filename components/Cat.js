import React, { Component } from 'react';
import * as routes from '../routes';
import history from '../common/history';
import {Link} from 'react-router-dom';

class Cat extends Component {

  render(){
    // console.log(routes);
    const content= routes.default.map((value,key)=>(
      (value.component && value.active) ?<p key={key}><Link to={value.path}>{value.name}</Link></p>:null
      ));
    return(
      <>Cat...
      <div>
      <button onClick={()=>(history.push('/'))}>Home</button>
      {content}
      </div>
      
      </>
    )
  }
}
export default Cat;