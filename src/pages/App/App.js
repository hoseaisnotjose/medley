import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
// exports attached to recipeAPI
// import * as recipeAPI from '../../utils/recipesService';
import AddRecipePage from '../../pages/AddRecipePage/AddRecipePage';
// import EditRecipePage from '../../pages/EditRecipePage/EditRecipePage';
// import RecipeDetailPage from '../../pages/RecipeDetailPage/RecipeDetailPage';
// import RecipeListPage from '../../pages/RecipeListPage/RecipeListPage';
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

// handleAddRecipe = async (newRecipeData) => {
//   const newRecipe = await recipe.create(newRecipeData);
//   this.setState((state) => ({
//     recipes: [...state.recipes, newRecipe],
//   }),
//   // using cb to wait for state to update before rerouting
//   () => this.props.history.push("/")
//   );
// };

// updateRecipe

// readRecipe

// deleteRecipe


/*--- Lifecycle Methods ---*/
// async componentDidMount() {
//   const recipes = await recipeAPI.getAll();
//   this.setState({ recipes });
// }


  render()  {
    return(
      <div>
        <Route>
        {/* <header className="header-footer">MEDLEY</header> */}
        <div className="container">
          <h1>MEDLEY</h1>
          <h4>Flavors we bring to the table</h4>
        </div>
        </Route>
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
