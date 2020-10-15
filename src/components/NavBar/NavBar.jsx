import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Link to='/about' className='NavBar-link'>About</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/home' className='NavBar-link'>Home</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/add' className='NavBar-link'>Add Recipe</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='' onClick={props.handleLogout} className='NavBar-link'>Logout</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
        </div>
        :
        <div>
            <Link to='/login' className="NavBar-link">LOGIN</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className="NavBar-link">SIGNUP</Link>
        </div>

        return(
            <div className="NavBar">
                {nav}
            </div>
        );
};

export default NavBar;