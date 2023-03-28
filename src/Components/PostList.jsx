import React from 'react'
import PostItem from './PostItem';

export default function PostList({posts, remove, title}) {
  return (
    <>
      <h1 className='list-items'>{title}</h1>
      {posts.map((post, index) => 
        <PostItem remove={remove} post={post} number={index + 1} key={post.id}/>)}
    </>
  )
}
