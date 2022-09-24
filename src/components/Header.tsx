import React from "react"
import {Outlet, Link} from "react-router-dom"

export default function Header() {
    return (
        <header className="main-head"> 
            <div className="main-head-wraper">
                <div className="main-head-title-wraper">
                    <Link className="main-head-title" to="/">Ajcltm Blog</Link>
                </div>
                <div className="main-menu-wraper">
                    <div className="main-menu-nav-wraper">
                        <Link className="main-menu-nav" to="/about">About</Link>
                        <a className="main-menu-nav" href="">Web Business</a>
                        <a className="main-menu-nav" href="">Data Service</a>
                        <a className="main-menu-nav" href="">Achieve</a>
                    </div>
                    <form className="search-form">
                        <input className="search-input" type='text' name='search' placeholder="Search.."/>
                    </form>
                </div>
                <div className="head-profile-wraper">
                    <div className="dropdown">
                        <button className="link"> Login </button>
                        <form className="dropdown-menu">
                            <label className="login-label">ID</label>
                            <input type='text' placeholder="id" className="login-input" />
                            <label className="login-label">Password</label>
                            <input type='text' placeholder="password" className="login-input" />
                            <input type="submit" value="login" className="login-submit"/>
                        </form>
                    </div>
                    <img className="head-profile" src='/images/icon.jpg'/>
                </div>
            </div>
        </header>
    )
}