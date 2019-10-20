import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginPage from './components/loginpage';
import MenuPage from './components/menupage';
import ChatroomPage from './components/chatroom/chatroompage';


class App extends Component {
  state={
      userName:''
  }



  render(){ 
      return (
        <Router>
          <div>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/chatroom/:charroomID" exact component={ChatroomPage}/>}/>
              <Route path="/menu" exact component={MenuPage}/>}/>
              <Route path="/"  exact component={LoginPage}/>}/>
            </Switch>
          </div>
      </Router>
      )
  }
}


export default App;
