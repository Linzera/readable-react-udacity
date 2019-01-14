import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PostList from '../../components/PostList';
import { fetchCategoryPosts } from '../../actions/postsActions';

class Category extends React.Component {
  constructor(props) {
    super(props);

    const { id } = props.match.params;

    this.state = {
      categoryTitle: id
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;

    const { categoryTitle } = this.state;

    dispatch(fetchCategoryPosts(categoryTitle));
  }

  render() {
    const { isLoading, categoryPosts } = this.props;
    const { categoryTitle } = this.state;

    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Categoria {categoryTitle}</h1>
        {isLoading ? <h2>Loading...</h2> : <PostList posts={categoryPosts} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.postsState.loading,
  categoryPosts: state.postsState.categoryPosts
});

export default connect(mapStateToProps)(Category);
