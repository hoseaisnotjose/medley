import React from 'react';
import './RecipeListPage.css';
import RecipeListItem from '../../components/RecipeListItem/RecipeListItem';

function RecipeListPage(props) {
    return(
        <>
            {!props.user ? (
                <></>
            ) : (
                <>
                <h1>Recipes List</h1>
                <div className="RecipeListPage-grid">
                    {props.recipes.map(recipe =>
                    <RecipeListItem
                        recipe={recipe}
                        handleDeleteRecipe={props.handleDeleteRecipe}
                        key={recipe._id}
                    />
                    )}
                </div>
                </>
            )}
        </>
    );
}



export default RecipeListPage;