import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withPostsStoreService } from '../../components/hoc';
import { compose } from '../../utils';
import { fetchPosts } from '../../actions';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';

import PostList from '../../components/post-components/post-list';

const PostListContainer = ({ posts, loading, error, fetchPosts }) => {
  useEffect(() => {  
    fetchPosts()
    return () => {
      console.log('PostListContainer unmount')
    };
  }, []);

  return  loading ? <Spinner/>:
          error ? <ErrorIndicator/>:
          <PostList data={posts}/>;

};

const mapStateToProps = ({ postList: { posts, loading, error }}) => ({ posts, loading, error });

const mapDispatchToProps = (dispatch, { postsStoreService }) => ({
  fetchPosts: fetchPosts(postsStoreService, dispatch)
});

export default compose(
  withPostsStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PostListContainer);
