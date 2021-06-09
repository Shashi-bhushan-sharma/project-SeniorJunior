import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";

import './App.css';

function App() {
  return (

    <Router>
      <Switch>
              
              <Route exact path ='/login' component={Login}></Route>
        
        <Route exact path='/register' component={Register}></Route>
        </Switch>


    </Router>
   
    
  );
}

export default App;
