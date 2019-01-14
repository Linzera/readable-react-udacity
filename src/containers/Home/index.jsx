import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/categoriesActions';
import { fetchAllPosts } from '../../actions/postsActions';
import PostList from '../../components/PostList';

import './index.css';
import { Typography } from '@material-ui/core';

class Home extends React.Component {
  state = {};

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchCategories());
    dispatch(fetchAllPosts());
  }

  render() {
    const { categoriesState, postsState } = this.props;
    const { loading, error } = categoriesState;
    const { posts } = postsState;

    if (loading) {
      return (
        <div>
          <h1>loading</h1>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <h2>Error: {error.response.data.error}</h2>
        </div>
      );
    }

    return (
      <div className="container">
        <h1>All posts</h1>
        <PostList posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categoriesState: state.categoriesState,
  postsState: state.postsState
});

export default connect(mapStateToProps)(Home);
