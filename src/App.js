import React, { useState, useMemo } from 'react'
import './styles/App.css'
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';

import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/MyModal/MyModal';

import AddButton from './Components/UI/button/AddButton';




function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Egor', body: 'yisherman'},
    {id: 2, title: 'Sasha', body: 'aisherman'},
    {id: 3, title: 'Agor', body: 'hsherman'},
    {id: 4, title: 'Yasha', body: 'sherman'},
  ])


  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }


  const sortedPosts = useMemo(()=> {
    if(filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  },
   [filter.sort, posts])

  const searchAndSortPosts = useMemo(()=> {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [sortedPosts, filter.query])

  const removePost = (post) => {
    setPosts(posts.filter(elem => elem.id !== post.id))
  }




  return (
    <div className="App">
      <AddButton onClick={()=> setModal(true)}>Create post</AddButton>
      <MyModal 
      visible={modal}
      setVisible={setModal}
      >
      <PostForm create={createPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={searchAndSortPosts} title='List of posts'/>
    </div>
  );
}

export default App;
