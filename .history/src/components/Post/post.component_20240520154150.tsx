import React from "react"

function PostComponent(){
    return(
        <>
        <header className="post__head">SQL</header>
        <div className="post__image"><img src={require('../../assets/news-icon.png')}/></div>
        <div className="post__text"></div>
        <div className="post__tags"></div>
        </>
    )
}