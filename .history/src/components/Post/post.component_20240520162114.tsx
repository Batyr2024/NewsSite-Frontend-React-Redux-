import './post.style.css'

function PostComponent(){
    return(
        <div className="post">
        <header className="post__head"><h2>SQL</h2></header>
        <img className="post__image" src={require('../../assets/news-icon.png')}/>
        <div className="post__text">bhljhbsdkjbfsdgsdjgsdl;sdknkjgsd</div>
        <div className="post__tags">#tag #tag</div>
        </div>
    )
}

export default PostComponent;