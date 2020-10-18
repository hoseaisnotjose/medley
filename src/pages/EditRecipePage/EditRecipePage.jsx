import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EditRecipePage extends Component {
    state = {
        invalidForm: false,
        // recipe is passed from RecipeListItem via <Link>
        formData: this.props.location.state.recipe
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateRecipe(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return(
            <>
                <h1>Edit Recipe</h1>
                <form ref={this.formRef} autoComplete="on" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                        className="form-control"
                        name="name"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input 
                        className="form-control"
                        name="description"
                        value={this.state.formData.description}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Servings</label>
                        <input 
                        className="form-control"
                        name="servings"
                        value={this.state.formData.servings}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Prep Time</label>
                        <input 
                        className="form-control"
                        name="preptime"
                        value={this.state.formData.preptime}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ingredients (required)</label>
                        <input 
                        className="form-control"
                        name="ingredients"
                        value={this.state.formData.ingredients}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Instructions</label>
                        <input 
                        className="form-control"
                        name="instructions"
                        value={this.state.formData.instructions}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <button type="submit" className="btn btn-xs" disabled={this.state.invalidForm}>SAVE</button>
                    <Link to='/home'>CANCEL</Link>
                </form>
            </>
        );
    }
}


export default EditRecipePage;