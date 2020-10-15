import React from 'react';
import RecipePanel from '../../components/RecipePanel/RecipePanel';

function RecipeDetailPage(props) {
    // Recipe is being passed via <Link> from RecipeListItem
    const recipe = props.location.state.recipe;
    return (
        <>
            <h1>Recipe Details</h1>
            <RecipePanel
            key={recipe._id}
            recipe={recipe}
            />
        </>
    );
}


export default RecipeDetailPage;