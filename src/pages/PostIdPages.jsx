import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from './../hooks/useFetching';
import PostService from './../API/PostService';
import MyLoader from '../Components/UI/Loader/MyLoader';
import classes from '../styles/PostIdPages/PostIdPages.module.css'


export default function PostIdPages() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data)
    })

    const [fetchComments] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className={classes.postIdPages}>
            <h1 className={classes.headerPostPage}>you got to the page of the post</h1>
            {isLoading
                ? <MyLoader styles={{alignItems: 'center'}}/>
                : <div className={classes.blockNamePost}>
                    <h3>Post:</h3>
                    <div className={classes.titleIdPage}>{post.id}. {post.title}</div>
                    <div className={classes.containerCommentsPage}>
                        {comments.map(comm =>
                            <div key={comm.id} className={classes.blockCommentsPage}>
                                <div>{comm.email}</div>
                                <div>{comm.body}</div>
                            </div>)}
                    </div>
                </div>

            }

        </div>
    )
}
