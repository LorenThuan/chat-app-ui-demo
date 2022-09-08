import React, { Component } from 'react';
import './nav.css';
import logo from './../../images/zelo_icon.png';


class Nav extends Component {
    render() { 
        return (
            <div className='nav'>
                <div className='nav__blocks'>
                <img src={logo} alt=''></img>
                </div>
                <div className='nav__blocks'></div>
                <div className='nav__blocks'></div>
            </div>
        );
    }
}
export default Nav;