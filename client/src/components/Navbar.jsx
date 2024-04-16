import React from 'react'
import '../assets/styles/core.css'
function Navbar() {
    return (
        <nav className="navbar custom-nav shadow-sm navbar-expand-lg justify-content-center sticky-top blue-bg">
            <div className="container navi">
                <a className="navbar-brand" href="/">
                    {/* <img src={logo} height={100} /> */}
                    IRON LIFTERS 2.0
                </a>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">New Members</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Renewals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Reports</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#">Log Out</a>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar