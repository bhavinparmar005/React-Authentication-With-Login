import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name id />
                    <div className="hamburger-lines">
                        <span className="line line1" />
                        <span className="line line2" />
                        <span className="line line3" />
                    </div>
                    <ul className="menu-items">
                        <li><a href="#">home</a></li>
                        <li><a href="#">Add Post</a></li>
                        <li><a href="#">Registration</a></li>
                        <li><a href="#">login page</a></li>
                        <li><a href="#">Log Out</a></li>
                        <li><a href="#">DashBord</a></li>
                       
                    </ul>
                    <h1 className="logo">Shopify</h1>
                </div>
            </nav>

            <div className="Empty"></div>

        </>
    )
}

export default Navbar
