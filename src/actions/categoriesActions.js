import Axios from 'axios';
import { API_URL } from '../util/constants';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchCategoriesBegin = () => ({
  type: FETCH_CATEGORIES
});

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: { categories }
});

export const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: { error }
});

export const fetchCategories = () => dispatch => {
  dispatch(fetchCategoriesBegin());

  return Axios.get(`${API_URL}/categories`)
    .then(res => dispatch(fetchCategoriesSuccess(res.data.categories)))
    .catch(error => dispatch(fetchCategoriesFailure(error)));
};
