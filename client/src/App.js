import { useState, useEffect,  } from 'react';
import axios from 'axios';
import {Link, Outlet} from 'react-router-dom';
import './App.css';

function App() {
  const [data, setData] = useState({});

  const onCLickHandler = async () => {
    const someData = await axios.get(' http://localhost:4000/api/data/get-data');
    setData(someData);
  }
  console.log(data);


  return (
    <div className="App">
      <nav>
      <Link to="/blog">Blog</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/">Home</Link>
      </nav>
        <button onClick={onCLickHandler}>get some data</button>
        {data.data && 
        <h1>{data.data.data[0].name}</h1>

       }
      <Outlet />
    </div>
  );
}

export default App;
