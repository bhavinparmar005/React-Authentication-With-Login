import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

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


                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/AddPost`}> AddPost</Link></li>
                        <li><Link to={`/RegistrationPage`}>Registration</Link></li>
                        {/* <li><Link to={`/LoginPage`}> Login</Link></li> */}
                        {/* <li><Link to={`/LogoutPage`}>Logout</Link></li> */}
                        <li><Link to={`/DashBord`}>Dashboard</Link></li>


                    </ul>
                    <h1 className="logo">Shopify</h1>
                </div>
            </nav>

            {/* <div className="Empty"></div> */}

        </>
    )
}

export default Navbar
