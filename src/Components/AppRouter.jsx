import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPages from './../pages/PostIdPages';



export default function AppRouter() {
    return (
        <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<PostIdPages />} />
            <Route path="*" element={<Posts />} />
        </Routes>
    )
}
