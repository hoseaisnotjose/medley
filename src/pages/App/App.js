import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
// exports attached to recipeAPI
import recipeAPI from '../../utils/recipesService';
import AddRecipePage from '../../pages/AddRecipePage/AddRecipePage';
import EditRecipePage from '../../pages/EditRecipePage/EditRecipePage';
import RecipeDetailPage from '../../pages/RecipeDetailPage/RecipeDetailPage';
import RecipeListPage from '../../pages/RecipeListPage/RecipeListPage';
import MainPage from '../../pages/MainPage/MainPage'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import {
  Button,
  Modal,
//   FormGroup,
//   FormControl,
//   ControlLabel,
//   Glyphicon
} from 'react-bootstrap';

class App extends Component {
  state = {
    recipes: [],
    user: userService.getUser(),
  };

  /*--- Recipe CRUD ---*/

  // CREATE RECIPE
  handleAddRecipe = async (newRecipeData) => {
    console.log(newRecipeData)
      const newRecipe = await recipeAPI.create(newRecipeData);
      this.setState((state) => ({
        recipes: [...state.recipes, newRecipe],
      }),
      // using cb to wait for state to update before rerouting
      () => this.props.history.push("/")
    );
  };

  // UPDATE RECIPE
  handleUpdateRecipe = async (updatedRecipeData) => {
    const updatedRecipe = await recipeAPI.update(updatedRecipeData);
    console.log(updatedRecipe)
    const newRecipesArray = this.state.recipes.map((r) => 
    r._id === updatedRecipe._id ? updatedRecipe : r);
    this.setState(
        { recipes: newRecipesArray },
        () => this.props.history.push("/")
    );
  };

// readRecipe

// DELETE RECIPE
  handleDeleteRecipe = async (id) => {
      await recipeAPI.deleteOne(id);
      this.setState((state) => ({
        recipes: state.recipes.filter((r) => r._id !== id),
      }),
      () => this.props.history.push("/")
    );
  };

  /*--- User Auth ---*/ 

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
    console.log(this.state.user);
  };

  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    const recipes = await recipeAPI.getAll();
    this.setState({ recipes });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  render()  {
    return(
      <div className="App">
        <header className='header-footer'>
          <Link link to="/">
              MEDLEY
          <h6 className="subheader">Flavors we bring to the table</h6> 
          </Link>
          </header>
          <Switch>
                <Route exact path="/" render={() =>
                  <MainPage
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                  />
                }/>
                <Route exact path="/add" render={() => (
                  <AddRecipePage handleAddRecipe={this.handleAddRecipe}/>
                  )}/>
                <Route exact path="/home" render={() => (
                  <RecipeListPage
                    user={this.state.user}
                    recipes={this.state.recipes}
                    handleDeleteRecipe={this.handleDeleteRecipe}
                    />
                  )}/>
                <Route exact path="/show" render={( {location }) => (
                  <RecipeDetailPage location={location}/>
                  )}/>
                <Route exact path="/edit" render={({ location }) => (
                  <EditRecipePage handleUpdateRecipe={this.handleUpdateRecipe}
                    location={location}
                  />
                  )}/>
                <Route exact path="/signup" render={({ history }) => (
                  <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}
                  />
                )}
                />
                <Route exact path='/login' render={({ history }) => (
                  <LoginPage
                  handleSignupOrLogin={this.handleSignupOrLogin}
                  history={history}
                />
                )}/>
          </Switch>
      </div>
    )
  }
}



export default App;
