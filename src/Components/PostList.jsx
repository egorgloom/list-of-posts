import React from 'react'
import PostItem from './PostItem';

export default function PostList({posts, ...props}) {
  return (
    <>
      <h1 className='list-items'>{props.title}</h1>
      {posts.map(post => 
        <PostItem post={post} key={post.id}/>)}
    </>
  )
}
