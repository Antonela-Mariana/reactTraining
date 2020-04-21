import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            {/* <li><Link to="/">Home</Link></li> */}
            <li><Link to="/alcoholic">Alcoholic</Link></li>
            <li><Link to="/non-alcoholic">Non-Alcoholic</Link></li>
            <li><Link to="/ordinary-drink">Ordinary-drink</Link></li>
            <li><Link to="/cocktail-glass">Cocktail-glass</Link></li>
            <li><Link to="/champagne-flute">Champagne-flute</Link></li>
        </nav>
    )
}

export default NavBar;