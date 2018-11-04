import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import UserController from "./User/UserController";

class App extends Component {
    render(){
      return(
          <UserController/>
      )
    }
}

export default App;

