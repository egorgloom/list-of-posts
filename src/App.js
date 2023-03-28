import React, { useState, useMemo } from 'react'
import './styles/App.css'
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import MySelect from './Components/UI/select/MySelect';
import MyInput from './Components/UI/input/MyInput';




function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Egor', body: 'yisherman'},
    {id: 2, title: 'Sasha', body: 'aisherman'},
    {id: 3, title: 'Agor', body: 'hsherman'},
    {id: 4, title: 'Yasha', body: 'sherman'},
  ])

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  const sortedPosts = useMemo(()=> {
    if(selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  },
   [selectedSort, posts])

  const searchAndSortPosts = useMemo(()=> {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [sortedPosts, searchQuery])

  const removePost = (post) => {
    setPosts(posts.filter(elem => elem.id !== post.id))
  }

const sortPosts = (sort) => {
  setSelectedSort(sort)
}


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <MyInput
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      placeholder='Search...'
      />
      <MySelect
      value={selectedSort}
      onChange={sortPosts}
      defaultValue='Sorting'
      options={[
        {value: 'title', name: 'by name'},
        {value: 'body', name: 'by description'}
        ]}/>
      <PostList remove={removePost} posts={searchAndSortPosts} title='List of posts'/>
    </div>
  );
}

export default App;
