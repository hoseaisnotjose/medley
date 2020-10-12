import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() =>
          <MainPage
          // user={this.state.user}
          // handleLogout={this.handleLogout}
          />
      }/>
      <header className="App-header">
        <div>
          <span>
            <h1><a href="Home" className="App-link">MEDLEY</a></h1>
          </span>
          <h8>Flavors we bring to the table</h8> 
        </div>
      </header>
      <div>
      <Route exact path='/signup' render={({ history }) => 
        <SignupPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
      <Route exact path='/login' render={({ history }) => 
        <LoginPage
          handleSignupOrLogin={this.handleSignupOrLogin}
          history={history}
          />
        }/>
      </div>
      </Switch>
    </div>
  );
}

export default App;
