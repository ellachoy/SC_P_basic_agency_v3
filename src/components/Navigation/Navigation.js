import React from 'react';
import './Navigation.scss';
import logo from '../../assets/img/logo.svg';
import menu from '../../assets/img/menu.svg';

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

// sfc
const Navigation = () => {
    return (
        <div className='navigation'>
            <nav>
            <Link exact to="/"className="nav_logo">
                            <img src={logo} alt="" />
                        </Link>
                <ul>
                    <li>
                        <NavLink exact to="/work">
                            WORK
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about">
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/news">
                            NEWS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/thinking">
                            THINKING
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact">
                            CONTACT
                        </NavLink>
                    </li>  
                </ul>
                <Link exact to="/menu" className="nav_link">
                            <img src={menu} alt="" />
                        </Link>
            </nav>
        </div>
    );
}

export default Navigation;

// dynamisch:
// Link: normaler Link
// NavLink: .active{color: purple}