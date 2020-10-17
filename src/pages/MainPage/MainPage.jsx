import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import './MainPage.css';
import { PromiseProvider } from 'mongoose';
import RecipeListPage from '../RecipeListPage/RecipeListPage';


const MainPage = (props) => {
    return(
        <div className="MainPage">
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <RecipeListPage
                recipe={props.recipe}
            />
        </div>
    );
};












export default MainPage;
