import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
} from '../actions/const';

const updatePostlist = (state, action) => {
  if (state === undefined) {
    return {
      posts: [],
      loading: true,
      error: null
    };
  };
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        error: null
      };

    case FETCH_POSTS_REQUEST:
      return {
        posts: [],
        error: null,
        loading: true
      };

    case FETCH_POSTS_FAILURE:
      return {
        posts: [],
        loading: false,
        error: action.payload
      };
  
    default:
      return state.postList;
  };
};

export default updatePostlist;