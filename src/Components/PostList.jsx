import React from 'react'
import PostItem from './PostItem';

export default function PostList({posts, remove, title}) {

  if(!posts.length) {
    return <h1 className='list-items'>Posts not found</h1>
  }
  return (
    <>
      <h1 className='list-items'>{title}</h1>
      {posts.map((post, index) => 
        <PostItem remove={remove} post={post} number={index + 1} key={post.id}/>)}
    </>
  )
}
