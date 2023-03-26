import React from 'react'
import MyButton from './UI/MyButton'

export default function PostItem(props) {
  return (
    <>
      <div className="post">
        <div className="post-content">
          <strong className='post-content-header'>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className='post-btn'>
          <MyButton>Delete</MyButton>
        </div>
      </div>
    </>
  )
}
