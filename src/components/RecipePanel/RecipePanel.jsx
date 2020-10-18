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
                    <dt>Instructions</dt>
                    <dd>{recipe.instructions}</dd>
                </dl>
            </div>
            <div className="panel-footer">
                    <Link to='/home'>Return Home</Link>
            </div>
        </div>
    );
}

export default RecipePanel;