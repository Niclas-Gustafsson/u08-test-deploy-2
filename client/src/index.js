import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Blog from './pages/blog';
import About from './pages/about';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> 
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

