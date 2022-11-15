import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div id="wrapper">
            <header id="header">
                <h1><NavLink to="/">Blog</NavLink></h1>
                <nav className="links">
                    <ul>
                        <li><NavLink to={'/signin'}>Login</NavLink></li>
                        <li><NavLink to={'/signup'}>Registration</NavLink></li>
                        <li><NavLink to={'/articles/create'}>Create post</NavLink></li>
                        <li><NavLink to={'/logout'}>Logout</NavLink></li>
                    </ul>
                </nav>
            </header>

            <div id="main">
                <Outlet />
            </div>
        </div >
    )
}

export default Layout