import React from 'react';
import { connect } from 'react-redux';

import { compose } from '../../utils';

import PostItem from '../../components/post-item';

const PostItemContainer = ({id, posts}) => {
  const post = posts.find(post => post.id == id)
  return post ?  <PostItem post={post}/> : <h2>Not Found</h2>
};

const mapStateToProps = ({ postList: { posts }}) => ({ posts });


export default compose(
  connect(mapStateToProps)
)(PostItemContainer);
