import { PostDto } from '../../dto/post.dto'
import { TagDto } from '../../dto/tag.dto';
import './post.style.css'

function PostComponent(props: { posts: any[]; }) {
    
    const news = props.posts.map((item) => 
    <li>
        <div className="post">
            <header className="post__head"><h2>{item.topic}</h2></header>
            <img className="post__image" src={require('../../assets/news-icon.png')} />
            <div className="post__text">{item.content}</div>
            <div className="post__tags">{item.tags !== undefined ? item.tags.map((item:any) => <li key={item.id}>#{item.nameTag}</li>) : ""}</div>
        </div>
    </li>)
    return (
        <ul>
            <div>post</div>
            {news}
        </ul>
    )
}

export default PostComponent;