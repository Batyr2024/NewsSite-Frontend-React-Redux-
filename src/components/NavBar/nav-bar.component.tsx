import React from "react"
import './nav-bar.style.css'
function NavBarDefault() {
    return (
        <header className="nav-bar">
            <div className="general-page">
                <img src={require('../../assets/news-icon.png')}></img>
            </div>
            <h1>General</h1>
            <div className="sign-panel">
                <span className="sign-in">Sign In</span>
                <span className="sign-up">Sign Up</span>
            </div>
        </header>
    )
}

export { NavBarDefault }