import React from 'react'
import MyButton from './UI/button/MyButton'

export default function PostItem(props) {
  return (
    <>
      <div className="post">
        <div className="post-content">
          <strong className='post-content-header'>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className='post-btn'>
          <MyButton onClick={()=> props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    </>
  )
}
