import React from 'react';
import { connect } from 'react-redux';
import {
  Typography,
  LinearProgress,
  Divider,
  Grid,
  Button
} from '@material-ui/core';
import { Favorite, Timelapse } from '@material-ui/icons';
import { fetchCategories } from '../../actions/categoriesActions';
import {
  fetchAllPosts,
  filter,
  FILTER_TYPES
} from '../../actions/postsActions';
import PostList from '../../components/PostList';

class Home extends React.Component {
  state = {};

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchCategories());
    dispatch(fetchAllPosts());
  }

  handleFilter = type => {
    const { dispatch, postsState } = this.props;
    const { posts } = postsState;

    dispatch(filter(type, posts));
  };

  render() {
    const { categoriesState, postsState } = this.props;
    const { loading, error } = categoriesState;
    const { posts } = postsState;

    if (loading) {
      return (
        <div>
          <LinearProgress />
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
      <Grid item xs>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={4}>
            <Grid container justify="center" alignItems="center">
              <Button
                variant="outlined"
                onClick={() => this.handleFilter(FILTER_TYPES.VOTESCORE)}
              >
                Filter by Votes
                <Favorite />
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container justify="center" alignItems="center">
              <Typography style={{ margin: 10 }} gutterBottom variant="h4">
                All Posts
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container justify="center" alignItems="center">
              <Button
                variant="outlined"
                onClick={() => this.handleFilter(FILTER_TYPES.TIME)}
              >
                Filter by Time
                <Timelapse />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
        <PostList posts={posts} />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  categoriesState: state.categoriesState,
  postsState: state.postsState
});

export default connect(mapStateToProps)(Home);
