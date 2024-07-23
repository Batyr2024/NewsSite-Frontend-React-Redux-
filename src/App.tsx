import { NavBarDefault } from './components/NavBar/nav-bar.component';
import PostComponent from './components/Post/post.component';
import './app.css';
import { PostDto } from './dto/post.dto';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState([]);
  useEffect(() => {
    const result = async () => {
      const data = await axios("http://localhost:5000/post")
      setCount(data.data)
    }
    result();
  }, [])
  return (
    <div className="App">
      <NavBarDefault />
      <section id="news" className='Posts'>
        <PostComponent posts = {count}/>
      </section>
    </div>
  );
}

export default App;
