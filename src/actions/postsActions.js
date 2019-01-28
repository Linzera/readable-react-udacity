import Axios from 'axios';
import { API_URL } from '../util/constants';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_CATEGORY_POSTS = 'FETCH_CATEGORY_POSTS';
export const FETCH_CATEGORY_POSTS_SUCCESS = 'FETCH_CATEGORY_POSTS_SUCCESS';
export const FETCH_CATEGORY_POSTS_FAILURE = 'FETCH_CATEGORY_POSTS_FAILURE';
export const POSTS_FILTER = 'POSTS_FILTER';
export const FILTER_TYPES = {
  VOTESCORE: 'VOTESCORE',
  TIME: 'TIME'
};

//  GET

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error }
});

export const fetchCategoryPostsBegin = () => ({
  type: FETCH_CATEGORY_POSTS
});

export const fetchCategoryPostsSuccess = posts => ({
  type: FETCH_CATEGORY_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchCategoryPostsFailure = error => ({
  type: FETCH_CATEGORY_POSTS_FAILURE,
  payload: { error }
});

export const filter = (type, posts) => dispatch => {
  switch (type) {
    case FILTER_TYPES.VOTESCORE:
      posts.sort((a, b) => a.voteScore + b.voteScore);
      dispatch(fetchPostsSuccess(posts));
      break;
    case FILTER_TYPES.TIME:
      posts.sort((a, b) => a.timestamp + a.timestamp);
      dispatch(fetchPostsSuccess(posts));
      break;
    default:
      break;
  }
};

// POST

export const fetchAllPosts = () => dispatch => {
  dispatch(fetchPostsBegin());

  return Axios.get(`${API_URL}/posts`)
    .then(res => dispatch(fetchPostsSuccess(res.data)))
    .catch(error => dispatch(fetchPostsFailure(error)));
};

export const fetchCategoryPosts = category => dispatch => {
  dispatch(fetchCategoryPostsBegin());

  return Axios.get(`${API_URL}/${category}/posts`)
    .then(res => dispatch(fetchCategoryPostsSuccess(res.data)))
    .catch(error => dispatch(fetchCategoryPostsFailure(error)));
};
