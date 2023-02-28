import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          setPosts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default MyComponent