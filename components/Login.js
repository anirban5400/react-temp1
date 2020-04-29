import React, { Component } from 'react';
import history from '../common/history';
import Auth from '../common/Auth';

class Login extends Component {

  constructor(props){
    super(props);
    this.logIn = this.logIn.bind(this);
  }
  logIn(){
    let token='anirban';
    Auth.authenticateUser(token);
    console.log("Token :",Auth.getToken());
    history.push('/');
  }

  render(){
    
    return(
      <>
      <button onClick={()=>this.logIn()}>Login</button>
    
      </>
    )
  }

}
export default Login;