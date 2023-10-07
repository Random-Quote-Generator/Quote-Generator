import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const fetchPosts = () => {
    axios
      .get("http://localhost:8000/api/posts/getAll")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
// 
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Navbar className="navbar" />
      <div className="post-container">
        {data.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-header">
              <img
                src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
                className="user-avatar"
              />
              <h3 className="username">Samar zribi</h3>
            </div>
            <p className="post-content">Although everyone prefers the exciting peaks and positives in life, sometimes we must deal with deep emotional challenges and obstacles. And when those low points in our lives happen,</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
