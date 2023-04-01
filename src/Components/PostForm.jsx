import React, { useState } from 'react'
import MyInput from './UI/input/MyInput';
import AddButton from './UI/button/AddButton';
import classes from './UI/form/CreatePostForm.module.css';

export default function PostForm({create}) {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost  = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''})
      }


    return (
        <>
            <form action="" className={classes.createPost}>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder='Title'
                />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder='Content'
                />
                <AddButton onClick={addNewPost}>Create</AddButton>
            </form>
        </>
    )
}
