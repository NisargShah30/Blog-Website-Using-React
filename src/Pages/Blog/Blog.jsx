import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { blogList } from '../../Configs/Data'
import { Link } from 'react-router-dom';
import Chip from '../../Compotants/comman/Chip/Chip'
import EmptyList from '../../Compotants/comman/EmptyList/EmptyList'
import './style.css'
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null)// By Default null rakhisu // 
  useEffect(() => {
    let blog = blogList.find(blog => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [])
  return (
    <div>
      <Link to='/' className='blog-goBack'><span>&#8592;</span>Go Back</Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip lable={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  )
}

export default Blog
