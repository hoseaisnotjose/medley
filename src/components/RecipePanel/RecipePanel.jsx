import React from 'react';
import { Link } from 'react-router-dom';

function RecipePanel({recipe}) {
    return(
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">{recipe.name}</h3>
            </div>
            <div className="panel-body">
                <dl>
                    <dt>Description</dt>
                    <dd>{recipe.description}</dd>
                    <dt>Servings</dt>
                    <dd>{recipe.servings}</dd>
                    <dt>Prep Time</dt>
                    <dd>{recipe.preptime}</dd>
                    <dt>Ingredients</dt>
                    <dd>{recipe.ingredients}</dd>
                    <dt>Quantity</dt>
                    <dd>{recipe.quantity}</dd>
                    <dt>Instructions</dt>
                    <dd>{recipe.instructions}</dd>
                    {/* <dt>By:</dt>
                    <dd>
                        <Link to='/'>{recipe.author}</Link>
                    </dd> */}
                </dl>
            </div>
            <div className="panel-footer">
                    <Link to='/'>Return Home</Link>
            </div>
        </div>
    );
}

export default RecipePanel;