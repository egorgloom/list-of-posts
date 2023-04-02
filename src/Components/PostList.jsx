import React from 'react'
import PostItem from './PostItem';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import notFound from "../pages/not-found.png"

export default function PostList({ posts, remove, title }) {

  if (!posts.length) {
    return <div className='error-items'>
      <img className='not-found' src={notFound} alt="not-found" />
    </div>
              
  }
  return (
    <>
      <h1 className='list-items'>{title}</h1>
      <TransitionGroup>

        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} post={post} number={index + 1} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  )
}


