import React from 'react';
import logo from './logo.svg';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {  Link} from "react-router-dom";

import { history, Rol } from './utils';

import './App.css';
import { PrivateRoute } from "./components";
import { HomePage, LoginPage} from "./views";
import { userActions } from './actions';
import CourseAdminPage from './views/CourseAdminPage';



function App(props) {

  const rol = props.user && props.user.rol
  
  return (
    <Router history={history}>
        
        <nav className="navbar navbar-default navbar-expand navbar-fixed-top navbar-center">
          <div className="container">
              
              {rol && 
              <p className="navbar-text">
                <Link to="/" className="navbar-link">Home</Link>
              </p>}
               
                {rol == Rol.ADMIN && 
                 <p className="navbar-text">
                   <Link to="/admin/course" className="navbar-link">Courses</Link>
                 </p>
                }

                
                {rol && 
                <p className="navbar-text navbar-right">
                  <a onClick={props.logout} className="navbar-link">Logout</a>
                </p>}
                {rol && 
                <p className="navbar-text navbar-right">
                  User: {props.user.username}
                </p>} 
          </div>        
          </nav>
          <br/>
        <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                      
                        <div>
                            <PrivateRoute exact path="/" roles={[Rol.USER, Rol.ADMIN] } component={HomePage} />
                            <PrivateRoute exact path="/admin/course" roles={Rol.ADMIN} component={CourseAdminPage} />
                            <Route path="/login" component={LoginPage} />
                        </div>
                    
                </div>
            </div>
        </div>
    </Router>
  );
}

function mapStateToProps(state) {
  console.log(state)
  return {
    user: state.authentication.user
  };
}

const logout = userActions.logout;

export default connect(mapStateToProps, {logout})(App);
