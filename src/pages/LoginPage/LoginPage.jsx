import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';

class LoginPage extends Component {
  
    state = {
      email: '',
      pw: ''
    };
  
    handleChange = (e) => {
      // elegant way of imp
      this.setState({
        // Using Computed Property Names
        [e.target.name]: e.target.value
      });
    }
  
    handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await userService.login(this.state);
        this.props.handleSignupOrLogin();
        // Successfully signed up - show HomePage
        this.props.history.push('/');
      } catch (err) {
        // alert below if invalid login
        alert('Incorrect login');
      }
    }
  
    render() {
      return (
        <div className="LoginPage">
          <header className="header-footer">Log In</header>
          <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
                <Link to='/'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default LoginPage;