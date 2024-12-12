import React from 'react'
import logoImage from "../assets/logo.png"
import '../index.css'


function Header(){

    return (
        <div className='header-nav'>
            <img className='nav-logo'  src={logoImage} alt="logo" />
            <div className='nav-cen'>
                <a href="#">Companies</a>
                <a href="#">Candidates</a>
                <a href="#">Assessment</a>
                <a href="#">Post a Job</a>
                <a href="#">Career  Advice</a>
            </div>
            <div className='nav-left'>
            <a href="#">Sign Up</a>
            <a className='nav-log' href="#">Log in</a>
            </div>
        </div>
    );
}

export default Header