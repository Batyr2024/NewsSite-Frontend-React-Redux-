import { NavBarDefault } from './components/NavBar/nav-bar.component';
import './App.css';
import PostComponent from './components/Post/post.component';

function App() {
  return (
    <div className="App">
      <NavBarDefault/>
      <PostComponent/>
      <PostComponent/>
      <PostComponent/>
      <PostComponent/>
      <var></var>
    </div>
  );
}

export default App;
