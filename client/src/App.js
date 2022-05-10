import {Link, Outlet} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/blog">Blog</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
