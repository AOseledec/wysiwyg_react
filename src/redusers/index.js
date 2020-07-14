import updatePostlist from './post-list';

const reducer = (state, action) => {
  return {
    postList: updatePostlist(state, action),
    date: []
  }
};

export default reducer;