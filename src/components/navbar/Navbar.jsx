import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <div className="nav shadow-md">
                <div className="logo">
                    <h2><Link to="/">&lt;Tracy Boateng /&gt;</Link></h2>
                </div>
                <div className="link">
                    <ul>
                        <li><Link to="/abouts" className="active">About</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}
