import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav id="main-nav" className="white-button">
                <div className="nav-button">
                    <div id="nav-icon" className="site-sidebar-toggle">
                        <span><span></span></span>
                    </div>
                </div>
                <div className="navbar-fixed-left">
                    <div className="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/idea'>Idea</NavLink>
                            </li>
                            <li>
                                <NavLink to='/team'>Team</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contacts'>Contacts</NavLink>
                            </li>
                            {/* <li className="visible-xs"><a href="https://booksy.net/pl_PL/s/polska-1?query=barberian&locationGeo=52.23146438828819,21.008541798250007&distanceUnit=km&distanceRadius=2&viewport=52.249281696694005,20.982449268953132,52.21363992592885,21.034634327546882&page=1&mapSize=small" className="last">Rezerwacja</a></li> */}
                        </ul>
                    </div>
                </div>        
            </nav>
        );
    }
}

export default Nav;