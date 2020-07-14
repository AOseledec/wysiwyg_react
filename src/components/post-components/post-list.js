import React from 'react'
import ItemList from '../item-list';
import { withChildRender } from '../hoc';
import { Link } from 'react-router-dom';

import './post-card.css';

const renderPost = ({ id, title, author, date }) => {
  return (
    <article className="card post-card">
      <div className="card-body">
        <Link to={`/post/${id}`}>
          <h5 className="card-title">{title}</h5>
        </Link>
        <p className="card-text">{author}</p>
        <p className="card-text">{date}</p>
      </div>
    </article>
  );
};


const PostList = withChildRender(renderPost)(ItemList);

export default PostList;
