import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light border-bottom pb-0">
                <span className="navbar-text pb-0 pt-0 mb-2">
                    <i className="fa fa-envelope mr-2"></i>info@testseries.com
                </span>
                <span className="navbar-text pb-0 pt-0 mb-2">
                    <i className="fa fa-phone mr-2"></i>7300176235
                </span>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">TEST SERIES</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav  mt-2 mt-lg-0 ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/courses">Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                        </li>
                    </ul>
                    <NavLink className="nav-link" to="/login">
                        <button type="button" className="btn btn-secondary login-btn mr-0" id="login_btn">Login</button>
                    </NavLink>
                    <NavLink className="nav-link" to="/register">
                        <button type="button" className="btn btn-secondary login-btn mr-4 ml-0" id="login_btn">Register</button>
                    </NavLink>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header;