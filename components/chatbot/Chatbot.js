import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import history from '../../common/history';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import {Steps1, Steps2}  from './botSteps';
import { theme,botAvatar } from'./bottheme';

class SimpleForm extends Component {
  constructor(props){
    super(props);
    this.state={botActive:0,
                FormBotActive:0,
                CustomBotActive:0}
    this.ChangeBot=this.ChangeBot.bind(this);
    
  }

   ChangeBot(value){
     if(value===1){
       this.setState({botActive:1, FormBotActive:1, CustomBotActive:0});
     }
     else if(value===2){
       this.setState({botActive:1, FormBotActive:0, CustomBotActive:1});
     }
     else{
       this.setState({botActive:0, FormBotActive:0, CustomBotActive:0});
     }
    
  }

  Goto(url){
    // console.log(url);
    if(url==="" || url===undefined){
      history.push('/');
    }else{
      history.push(url);
    }

  }
  render() {
    // console.log(this.state);
    // console.log(this.props);
    
    return (
      <>
      <button onClick={()=> this.Goto()}>Home</button>
      <Link to='/'>Home</Link>
      <br/>
      <br/>
      <button onClick={()=>this.ChangeBot(1)}>FormBot</button>
      <button onClick={()=>this.ChangeBot(2)}>CustomBot</button>
      <button onClick={()=>this.ChangeBot(0)}>CloseBot</button>

      {(this.state.botActive && this.state.FormBotActive)? 
      <ThemeProvider theme={theme}>
      <ChatBot steps={Steps1}/>
      </ThemeProvider>
      :((this.state.botActive && this.state.CustomBotActive)?
      <ChatBot botAvatar={botAvatar} steps={Steps2}/>
      :null
      )
      }
      </>
    );
  }
}

export default SimpleForm;
