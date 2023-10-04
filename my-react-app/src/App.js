
import './App.css';
import React  , {useEffect , useState } from 'react';
import Navbar from './navbar';
import axios from 'axios';

function App() {
  const [data ,setData] = useState([])

  const fetch = () => {
    axios.get("http://localhost:8000/api/posts/getAll")
    .then(res => {
        setData(res.data)
        console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
fetch()
  },[])

  return (
    <div className="App">
  <Navbar/>
  <div className="post-container">
        {data.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-header">
            </div>
            <p className="post-content">{post.content}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
