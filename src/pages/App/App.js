import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  state = {
    recipes: [],
    user: userService.getUser(),
  };


/*--- Callback Methods ---*/

handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
}

handleSignupOrLogin = () => {
  this.setState({ user: userService.getUser() });
}

/*--- Recipe CRUD ---*/

// addRecipe

// updateRecipe

// readRecipe

// deleteRecipe


/*--- Lifecycle Methods ---*/


  render()  {
    return(
      <div>
        {/* <header className="header-footer">MEDLEY</header> */}
        <div className="container">
          <h1>MEDLEY</h1>
          <h4>Flavors we bring to the table</h4>
        </div>
        <Switch>
          <Route exact path='/' render={() =>
            <MainPage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
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
        </Switch>
      </div>
    )
  }
}



export default App;
