import React from "react"

function PostComponent(){
    return(
        <div className="post">
            <h2 className="post__head">SQL</h2>
            
            <div className="post__image"><img src={require('../../assets/news-icon.png')}/></div>
        <div className="post__text">bhljhbsdkjbfsdgsdjgsdl;sdknkjgsd</div>
        <div className="post__tags">#tag #tag</div>
        </div>
    )
}

export default PostComponent;