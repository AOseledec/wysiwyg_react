import React from 'react'

import './post-item.css'

const PostItem = ({ post }) => {
  const { title, author, content, date } = post;
  document.title = title;

  // {
  //   заголовок записи внутри тега h1,
  //   тег title тоже должен содержать заголовок записи,
  //   контент записи,
  //   имя автора,
  //   дата записи,
  // }
  return (
    <div className='container'>
      <h1 className="card-title">{title}</h1>
      <div className='card' dangerouslySetInnerHTML={{__html: content.replace(/(<? *script)/gi, 'illegalscript')}}>
      </div>
      <p className="font-weight-normal">{author}</p>
      <p className="font-weight-light">{date}</p>
    </div>
  );
};

export default PostItem;
