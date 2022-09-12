import React from "react"

export default function Header() {
    return (
        <header className="main-head">
            <div className="main-head-wraper">
                <button className="main-head-title">Ajcltm Blog</button>
                <div className="dropdown">
                    <button className="link"> about </button>
                    <div className="dropdown-menu">
                        Dropdown Content
                    </div>
                </div>
                <button className="main-head-login">Login</button>
            </div>
            <div className="head-profile-wraper">
                <img className="head-profile" src='/images/icon.jpg'/>
            </div>
        </header>

    )
}