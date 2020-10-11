import React from 'react';
import './App.css';
import Login from "./Login";
import Student from "./Student";
import {BrowserRouter as Router,Switch,Route,Link} from"react-router-dom";
import AddStudent from './AddStudent';
import Signup from "./Signup";

function App() {
  return (
    
    <Router>
        <div className="app">
          
          <Switch>
            <Route path="/login">
              <Login/>
          </Route>
        
          <Route path="/students">
              <Student/>
           </Route>  
           <Route path="/student/add">
              <AddStudent/>
            </Route>
            <Route path="/logins">
              
              <Signup/>
              </Route>
            
          </Switch>
       
    </div>
    </Router>
  );
}

export default App;
