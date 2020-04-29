import React, { Component } from 'react';
import history from '../common/history';
import axios from 'axios'

class Dog extends Component {



  componentDidMount() {
    
    fetch(`https://laravel6test.000webhostapp.com/api/open`)
      .then(response => response.json())
      .then(function (response) {
        
          console.log("then",response);
        
      })
      .catch(function (error) {
        console.log("error",error);
      });
  }

checkAuth(){
  // let JWT_Token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGFyYXZlbDZ0ZXN0LjAwMHdlYmhvc3RhcHAuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTY3NzY4NjcwLCJleHAiOjE1Njc4NTUwNzAsIm5iZiI6MTU2Nzc2ODY3MCwianRpIjoibXFFcjFGUmduOVJYNlZ1UiIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9._WIJUX-x9qe1s2NFmCNQsH3TAY3vNHL4_k51aVv7BYU`;
    
  // var check = { headers: {"Content-Type" : 'application/json'} }
  // axios.get(`https://laravel6test.000webhostapp.com/api/open`)
  //       .then(response => {
  //           console.log('Response', response)
  //       })
  //       .catch(e => {
  //           console.log('Error: ', e.response)
  //       })



  console.log('here');
}

  render(){
    return(
      <>Dog...
      <div><button onClick={()=>(history.push('/'))}>Home</button>
      </div>
      <div>
      <button onClick={()=>this.checkAuth()}>CheckAuth</button>
      </div>
      </>
    )
  }
}
export default Dog;