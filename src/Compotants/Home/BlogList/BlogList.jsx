import React from 'react'
import BlogItem from './BlogItem/BlogItem'
import './style.css'
const BlogList = ({ blogs }) => (
    <div className='bloglist-wrap'>
        {blogs.map((blog) => (
            <BlogItem blog={blog} key={blog.id}/>
        ))}
    </div>
);


export default BlogList
// BlogList ne pages na Home.js ma import kairu che //
// aa BlogItem ma je Blog che ae BlogItem mathi Recive thay che as a props //
