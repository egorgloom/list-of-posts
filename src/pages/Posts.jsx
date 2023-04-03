import React, { useState, useEffect} from 'react'
import './../styles/App.css'
import PostList from './../Components/PostList';
import PostForm from './../Components/PostForm';

import PostFilter from './../Components/PostFilter';
import MyModal from './../Components/UI/MyModal/MyModal';
import AddButton from './../Components/UI/button/AddButton';
import { usePosts } from './../hooks/usePosts';
import PostService from './../API/PostService';
import MyLoader from './../Components/UI/Loader/MyLoader';
import { useFetching } from './../hooks/useFetching';
import { getPageCount} from './../utils/pages';


import Pagination from './../Components/UI/pagination/Pagination';


function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [limit , setLimit] = useState(10);
  const [page , setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)

  const searchAndSortPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isLoading, postError] = useFetching(async (limit, page)=> {
    const response = await PostService.getAll(limit, page); 
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(elem => elem.id !== post.id))
  }

  useEffect(()=> {
    fetchPosts(limit, page)
  }, [])


  const changePage = (page)=> {
    setPage(page)
    fetchPosts(limit, page)

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
      {postError && 
      <h1 className='list-items'>Error: ${postError}</h1>}
      {isLoading
      ? <div className='block-loader'><MyLoader/></div>
      :<PostList remove={removePost} posts={searchAndSortPosts} title='List of posts'/>}
      <Pagination 
      page={page}
      changePage={changePage}
      totalPages={totalPages}
      
      />

    </div>
  );
}

export default Posts;
