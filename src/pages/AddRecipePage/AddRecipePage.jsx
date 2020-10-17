import React, { Component } from 'react';


class AddRecipePage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            description: '',
            servings: 'Two',
            preptime: '',
            ingredients: '',
            quantity: '',
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddRecipe(this.state.formData);
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
                <h1>Add Recipe</h1>
                <form ref={this.formRef} autoComplete="on" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Recipe Name (required)</label>
                        <input className="form-control" name="name" 
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Recipe Description</label>
                        <input 
                        className="form-control"
                        name="description"
                        value={this.state.formData.description}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Recipe Servings (required)</label>
                        <input 
                        className="form-control"
                        name="servings"
                        value={this.state.formData.servings}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Recipe Prep Time</label>
                        <input 
                        className="form-control"
                        name="preptime"
                        value={this.state.formData.preptime}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Recipe Ingredients (required)</label>
                        <input 
                        className="form-control"
                        name="ingredients"
                        value={this.state.formData.ingredients}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Recipe Quantity (required)</label>
                        <input 
                        className="form-control"
                        name="quantity"
                        value={this.state.formData.quantity}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <button type="submit" className="btn" disabled={this.state.invalidForm}>Add Recipe</button>
                    {/* <button type="canel" className="btn">CANCEL</button> */}
                </form>
            </>
        );
    }
}

export default AddRecipePage;