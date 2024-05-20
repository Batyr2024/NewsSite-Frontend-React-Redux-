import React from "react"

function PostComponent(){
    return(
        <>
        <header className="post__head"><h1>SQL</h1></header>
        <div className="post__image"><img src={require('../../assets/news-icon.png')}/></div>
        <div className="post__text">bhljhbsdkjbfsdgsdjgsdl;sdknkjgsd</div>
        <div className="post__tags">#tag #tag</div>
        </>
    )
}

export default PostComponent;