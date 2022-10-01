import React from "react"
import {Outlet, Link} from "react-router-dom"

export default function Nav() {
    return (
        <nav className='main-nav'>
            <div className='main-nav-wraper'>
                <Link className='main-nav-item' to="about">Nav 1</Link>
                <Link className='main-nav-item' to="">Nav 2</Link>
                <Link className='main-nav-item' to="">Nav 3</Link>
            </div>
        </nav>
    )
}