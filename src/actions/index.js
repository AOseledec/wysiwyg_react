import * as type from './const';

const postsLoaded = (newPosts) => {
  return {
    type: type.FETCH_POSTS_SUCCESS,
    payload: newPosts
  };
};

const postsRequested = () => {
  return {
    type: type.FETCH_POSTS_REQUEST
  };
};

const postsError = (error) => {
  return {
    type: type.FETCH_POSTS_FAILURE,
    payload: error
  };
};

const fetchPosts = ( postsStoreService, dispatch ) => () => {
  dispatch(postsRequested());
  postsStoreService.getPosts()
  .then((data) => dispatch(postsLoaded(data)))
  .catch((error) => dispatch(postsError(error)));
}

const fetchAddPost = ( postsStoreService, dispatch ) => (data) => {
  dispatch(postsRequested());
  postsStoreService.postAddPost(data)
  .then((data) => dispatch(postsLoaded(data)))
  .catch((error) => dispatch(postsError(error)));
}

export {
  fetchPosts,
  fetchAddPost,
};