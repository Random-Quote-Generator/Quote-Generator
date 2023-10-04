import React from 'react';
import './Navbar.css';
import { FaSearch, FaHome, FaUserFriends, FaBell, FaUserCircle } from 'react-icons/fa';

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <img src="./logo.png"  />
                </div>
                <div className="navbar-search">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search Questos Generator" />
                </div>
                <div className="navbar-links">
                    <div className="navbar-link">
                        <FaHome />
                    </div>
                    <div className="navbar-link">
                        <FaUserFriends />
                    </div>
                    <div className="navbar-link">
                        <FaBell />
                    </div>
                    <div className="navbar-link">
                        <FaUserCircle />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
