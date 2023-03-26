import React, { useState } from 'react'


import './styles/App.css'
import PostList from './Components/PostList';




function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Egor', body: 'fisherman'},
    {id: 2, title: 'Sasha', body: 'fisherman'},
  ])
  return (
    <div className="App">
      <PostList posts={posts} title='List of posts'/>
    </div>
  );
}

export default App;
