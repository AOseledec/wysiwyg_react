import React from 'react'
import PostForm from '../post-form';

const AddPost = () => {
  document.title = 'Добавить запись'
  return (
    <div>
      <PostForm />
    </div>
  )
}

export default AddPost;
