import React from 'react'
import { PostItemContainer } from '../../container';

const Post = ({ match }) => {
  return (
    <div>
      <PostItemContainer id={match.params.id}/>
    </div>
  )
}

export default Post;
