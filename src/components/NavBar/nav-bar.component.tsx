import './nav-bar.style.css'
function NavBarDefault() {
    return (
        <header className="nav-bar">
            <div className="general-page">
                <img className="nav-bar__image" src={require('../../assets/news-icon.png')}></img>
            </div>
            <h1>General</h1>
            <div className="sign-panel">
                <button className="sign-in">Sign In</button>
                <button className="sign-up">Sign Up</button>
            </div>
        </header>
    )
}

export { NavBarDefault }