import React from 'react'
import Chip from '../../../comman/Chip/Chip'
import { Link } from 'react-router-dom'
import './style.css'
const BlogItem = ({ blog: { id, description, title, createdAt, authorName, authorAvatar, category, cover } }) => ( // aa blog che ae ek as a Props che // je aapde BlogList ma Resive kriae chiae // // js/react ni bhasha ma Destrurecturing kevay //  
  <div className='blogItem-wrap'>
    <img src={cover} alt='' className='blogItem-cover' />
    <Chip lable={category} />
    <h3>{title}</h3>
    <p className='blogItem_des'>{description}</p>
    <footer>
      <div className='blogItem-author'>
        <img src={authorAvatar} alt='' />
        <div>
          <h6>{authorName}</h6>
          <p>{createdAt}</p>
        </div>
      </div>
      <Link className='blogItem-link' to={`/blog/${id}`}>  ➝</Link>
    </footer>
  </div>
);

export default BlogItem
