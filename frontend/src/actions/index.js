export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_CAT_POSTS = 'GET_CAT_POSTS';
export const GET_SPEC_COMMENTS = 'GET_SPEC_COMMENTS';
export const GET_SPEC_POST = 'GET_SPEC_POST';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SORT_HOME_BY_DATE = 'SORT_HOME_BY_DATE';
export const SORT_HOME_BY_VOTE = 'SORT_HOME_BY_VOTE';
export const SORT_POSTS_BY_DATE = 'SORT_POSTS_BY_DATE';
export const SORT_POSTS_BY_VOTE = 'SORT_POSTS_BY_VOTE';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts,
  };
};

export const getCatPosts = (catPosts) => {
  return {
    type: GET_CAT_POSTS,
    catPosts,
  };
};

export const getSpecComments = (specComments) => {
  return {
    type: GET_SPEC_COMMENTS,
    specComments,
  };
};

export const getSpecPost = (specPost) => {
  return {
    type: GET_SPEC_POST,
    specPost,
  };
};

export const getCategories = (cats) => {
  return {
    type: GET_CATEGORIES,
    cats,
  };
};

export const sortHomeByDate = (func) => {
  return {
    type: SORT_HOME_BY_DATE,
    func,
  };
};

export const sortHomeByVote = (func) => {
  return {
    type: SORT_HOME_BY_VOTE,
    func,
  };
};

export const sortPostsByDate = (func) => {
  return {
    type: SORT_POSTS_BY_DATE,
    func,
  };
};

export const sortPostsByVote = (func) => {
  return {
    type: SORT_POSTS_BY_VOTE,
    func,
  };
};

export const deletePost = () => {
  return {
    type: DELETE_POST,
  };
};

export const deleteComment = () => {
  return {
    type: DELETE_COMMENT,
  };
};
