
// class App extends Component {
//     state = {
//       recipes: [],
//       user: userService.getUser(),
//     };
  
//     /*--- Recipe CRUD ---*/
  
//     // CREATE RECIPE
//     handleAddRecipe = async (newRecipeData) => {
//         const newRecipe = await recipeAPI.create(newRecipeData);
//         this.setState((state) => ({
//           recipes: [...state.recipes, newRecipe],
//         }),
//         // using cb to wait for state to update before rerouting
//         () => this.props.history.push("/")
//       );
//     };
  
//     // UPDATE RECIPE
//     handleUpdateRecipe = async (updatedRecipeData) => {
//       const updatedRecipe = await recipeAPI.update(updatedRecipeData);
//       const newRecipesArray = this.state.recipes.map((r) => 
//       r._id === updatedRecipe._id ? updatedRecipe : r);
//       this.setState(
//         { recipes: newRecipesArray },
//         () => this.props.history.push("/")
//       );
//     };
  
//   // readRecipe
  
//   // DELETE RECIPE
//     handleDeleteRecipe = async (id) => {
//         await recipeAPI.deleteOne(id);
//         this.setState((state) => ({
//           recipes: state.recipes.filter((r) => r._id !== id),
//         }),
//         () => this.props.history.push("/")
//       );
//     };
  
//     /*--- User Auth ---*/ 
  
//     handleSignupOrLogin = () => {
//       this.setState({ user: userService.getUser() });
//       console.log(this.state.user);
//     };
  
//     /*--- Lifecycle Methods ---*/
//     async componentDidMount() {
//       const recipes = await recipeAPI.getAll();
//       this.setState({ recipes });
//     }
  
//     handleLogout = () => {
//       userService.logout();
//       this.setState({ user: null });
//     }
  
//     render()  {
//       return(
//         <div className="App">
//           <header className="App-header">
//             MEDLEY
//             <h6>Flavors we bring to the table</h6>
//             <nav>
//               {this.state.user ? (
//                 <>
//                   <NavLink exact to="/">
//                     Home
//                   </NavLink>
//                   &nbsp;&nbsp;&nbsp;
//                   <Link to="" onClick={this.handleLogout}>
//                     Logout
//                   </Link>
//                   &nbsp;&nbsp;&nbsp;
//                 </>
//               ) : (
//                 <>
//                 <NavLink exact to="/login">
//                   Login
//                 </NavLink>
//                 &nbsp;&nbsp;&nbsp;
//                 <NavLink exact to="/signup">
//                   Signup
//                 </NavLink>
//                 </>
//               )}
//             </nav>
//           </header>
//           <main>
//                 {this.state.user ? 
//                 <h2>Welcome, {this.state.user.name}</h2> 
//                 : 
//                 <h2>Please log in first!</h2>}
//             <Switch>
//                   <Route exact path="/" render={() => (
//                     <RecipeListPage
//                     user={this.state.user}
//                     recipes={this.state.recipes}
//                     handleDeleteRecipe={this.handleDeleteRecipe}
//                     />
//                   )}/>
//                   <Route exact path='/' render={() =>
//                     <MainPage
//                     user={this.state.user}
//                     handleLogout={this.handleLogout}
//                     />
//                   }/>
//                   <Route exact path="/add" render={() => (
//                     <AddRecipePage handleAddRecipe={this.handleAddRecipe}/>
//                     )}/>
//                   <Route exact path="/details" render={( {location }) => (
//                     <RecipeDetailPage location={location}/>
//                     )}/>
//                   <Route exact path="/edit" render={({ location }) => (
//                     <EditRecipePage handleUpdateRecipe={this.handleUpdateRecipe}
//                       location={location}
//                     />
//                     )}/>
//                   <Route exact path="/singup" render={({ history }) => (
//                     <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}
//                     />
//                   )}
//                   />
//                   <Route exact path='/login' render={({ history }) => (
//                     <LoginPage
//                     handleSignupOrLogin={this.handleSignupOrLogin}
//                     history={history}
//                   />
//                   )}/>
//             </Switch>
//           </main>
//         </div>
//       )
//     }
//   }




// <header className="App-header">
// MEDLEY
// <h6>Flavors we bring to the table</h6>
// <nav>
//   {this.state.user ? (
//     <>
//       <NavLink exact to="/">
//         Home
//       </NavLink>
//       &nbsp;&nbsp;&nbsp;
//       <Link to="" onClick={this.handleLogout}>
//         Logout
//       </Link>
//       &nbsp;&nbsp;&nbsp;
//     </>
//   ) : (
//     <>
//     <NavLink exact to="/login">
//       Login
//     </NavLink>
//     &nbsp;&nbsp;&nbsp;
//     <NavLink exact to="/signup">
//       Signup
//     </NavLink>
//     </>
//   )}
// </nav>
// </header>
// <main>
//     {this.state.user ? 
//     <h2>Welcome, {this.state.user.name}</h2> 
//     : 
//     <h2>Please log in first!</h2>}


{/* <Route exact path="/" render={() => (
                  <RecipeListPage
                  user={this.state.user}
                  recipes={this.state.recipes}
                  handleDeleteRecipe={this.handleDeleteRecipe}
                  />
                )}/> */}
