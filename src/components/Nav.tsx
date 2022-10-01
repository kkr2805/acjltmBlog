import React from "react"
import {Outlet, Link} from "react-router-dom"

function Nav_About() {
    return (
        <nav className='main-nav'>
            <div className='main-nav-wraper'>
                <Link className='main-nav-item' to="/about/nav1">Nav 1</Link>
                <Link className='main-nav-item' to="/about/nav2">Nav 2</Link>
                <Link className='main-nav-item' to="/about/nav3">Nav 3</Link>
            </div>
        </nav>
    )
}

function Nav_Archive() {
    return (
        <nav className='main-nav'>
            <div className='main-nav-wraper'>
                <Link className='main-nav-item' to="/archive/71">Nav 1</Link>
                <Link className='main-nav-item' to="/archive/72">Nav 2</Link>
                <Link className='main-nav-item' to="/archive/73">Nav 3</Link>
            </div>
        </nav>
    )
}

function Nav_DataService() {
    return (
        <nav className='main-nav'>
            <div className='main-nav-wraper'>
                <Link className='main-nav-item' to="/dataService/nav1">Nav 1</Link>
                <Link className='main-nav-item' to="/dataService/nav2">Nav 2</Link>
                <Link className='main-nav-item' to="/dataService/nav3">Nav 3</Link>
            </div>
        </nav>
    )
}

function Nav_WebBusiness() {
    return (
        <nav className='main-nav'>
            <div className='main-nav-wraper'>
                <Link className='main-nav-item' to="/webBusiness/nav1">Nav 1</Link>
                <Link className='main-nav-item' to="/webBusiness/nav2">Nav 2</Link>
                <Link className='main-nav-item' to="/webBusiness/nav3">Nav 3</Link>
            </div>
        </nav>
    )
}

export {Nav_About, Nav_Archive, Nav_DataService, Nav_WebBusiness};