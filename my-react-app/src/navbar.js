import React from 'react';
import './Navbar.css';

import { FaSearch, FaHome, FaUserFriends, FaBell, FaUserCircle, FaComment, FaRegUser, FaCog, FaCompass } from 'react-icons/fa';

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <img src="./images/logo.png" alt="Questos Generator Logo" />
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
                        <div className="notification-badge">5</div>
                    </div>
                    <div className="navbar-link">
                        <FaComment />
                        <div className="notification-badge">3</div>
                    </div>
                    <div className="navbar-link">
                        <FaRegUser />
                    </div>
                    <div className="navbar-link">
                        <FaCog />
                    </div>
                    <div className="navbar-link">
                        <FaCompass />
                    </div>
                </div>
                <div className="navbar-user">
                    <img src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg" alt="User Profile" className="navbar-profile-img" />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
