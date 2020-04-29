import React, { Component } from 'react';
import history from '../common/history';
import Auth from '../common/Auth';

class Logout extends Component {


  logOut(){
    Auth.deauthenticateUser();
    console.log("Token :",Auth.getToken());
    history.push('/');
  }

  render(){
    return(
      <>
      <button onClick={this.logOut}>Logout</button>
    
      </>
    )
  }

}
export default Logout;