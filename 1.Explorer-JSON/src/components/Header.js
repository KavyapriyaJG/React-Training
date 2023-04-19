import React from 'react';
import brand from '../assets/images/logo.png';
import '../assets/styles/Header.scss';

import { useNavigate } from 'react-router-dom';

function Header() {
    const goto = useNavigate();

    return (
        <header>
            <div className="brand" onClick={() => goto('/')}>
                <img src={brand} alt="Brand Logo" />
            </div>
            <div className="menu">
                <a className="menu-item" href="/">Hotels</a>
                <a className="menu-item" href="/">Bike Rentals</a>
                <a className="menu-item" href="/">Restaurants</a>
            </div>
        </header>
    );
}

export default Header;