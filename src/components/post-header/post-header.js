import React from 'react'
import { Link } from 'react-router-dom';

import './post-header.css'; 

const PostHeader = () => {
  return (
    <header className='post-header'>
      <div className="container">
        <Link to='/' className='logo text-dark'>Main</Link>
        <Link to='/add-post' className='add-post'>
          <span>Add post</span> 
          <i className="cart-icon fa fa-plus-circle" />
        </Link>
      </div>
    </header>
  )
}

export default PostHeader;

