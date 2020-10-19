import React, { Component } from 'react';
import { FormLabel } from 'react-bootstrap';


class AddRecipePage extends Component {
    state = {
        showModal: false,
        invalidForm: true,
        formData: {
            name: '',
            description: '',
            servings: 'Two',
            preptime: '',
            ingredients: '',
            instructions: '',
            photo: '',
            // user: this.props.user._id
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
                <h3>Add Recipe</h3>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            {/* <Modal dialogClassName="adModal" show={this.state.showModal}>
                <Modal.body>
                    <divclassName="modalBody"> */}
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control-lg" name="name" 
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div className="form-label">
                        <label>Description</label>
                        <textarea 
                        className="form-control-lg"
                        name="description"
                        value={this.state.formData.description}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Servings</label>
                        <input 
                        className="form-control-lg"
                        name="servings"
                        value={this.state.formData.servings}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Prep Time</label>
                        <input 
                        className="form-control-lg"
                        name="preptime"
                        value={this.state.formData.preptime}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ingredients</label>
                        <textarea
                        className="form-control-lg"
                        name="ingredients"
                        value={this.state.formData.ingredients}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Instructions</label>
                        <textarea 
                        className="form-control-lg"
                        name="instructions"
                        value={this.state.formData.instructions}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input 
                        className="form-control-lg"
                        name="photo"
                        value={this.state.formData.photo}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn" disabled={this.state.invalidForm}>Add Recipe</button>
                    {/* <button type="canel" className="btn">CANCEL</button> */}
                </form>
                {/* </Modal.body>
                </Modal>
                </div> */}
            </>
        );
    }
}

export default AddRecipePage;