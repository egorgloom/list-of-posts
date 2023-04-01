import React, { useState, useEffect} from 'react'
import './styles/App.css'
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';

import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/MyModal/MyModal';
import AddButton from './Components/UI/button/AddButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import MyLoader from './Components/UI/Loader/MyLoader';
import { useFetching } from './hooks/useFetching';






function App() {

  const [posts, setPosts] = useState([])


  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false)
  const searchAndSortPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isLoading, postError] = useFetching(async ()=> {
    const posts = await PostService.getAll();
    setPosts(posts)
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(elem => elem.id !== post.id))
  }

  useEffect(()=> {
    fetchPosts()
  }, [])






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
      {postError && 
      <h1 className='list-items'>Error: ${postError}</h1>}
      {isLoading
      ? <div className='block-loader'><MyLoader/></div>
      :<PostList remove={removePost} posts={searchAndSortPosts} title='List of posts'/>}
    </div>
  );
}

export default App;
