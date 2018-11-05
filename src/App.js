import React, {Component} from 'react';
import './App.css';
import UserController from "./User/UserController";

class App extends Component {
    render(){
      return(
          <div className="App">
              <UserController className="App"/>
          </div>

      )
    }
}

export default App;

