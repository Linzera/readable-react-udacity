import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_CATEGORY_POSTS,
  FETCH_CATEGORY_POSTS_FAILURE,
  FETCH_CATEGORY_POSTS_SUCCESS
} from '../actions/postsActions';

const initialState = {
  loading: false,
  error: null,
  posts: [],
  categoryPosts: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        posts: []
      };
    case FETCH_CATEGORY_POSTS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CATEGORY_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        categoryPosts: []
      };
    case FETCH_CATEGORY_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryPosts: action.payload.posts
      };
    default:
      return state;
  }
};

export default postsReducer;
