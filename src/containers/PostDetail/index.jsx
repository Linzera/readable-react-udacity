import React from 'react';
import axios from 'axios';
import {
  Grid,
  LinearProgress,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  withStyles
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { blue } from '@material-ui/core/colors';
import { API_URL } from '../../util/constants';

const styles = theme => ({
  card: {
    maxWidth: 600,
    marginTop: 50
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  avatar: {
    backgroundColor: blue[500]
  }
});

class PostDetail extends React.Component {
  state = {
    isLoading: true,
    postDetail: {}
  };

  componentDidMount() {
    const { match } = this.props;

    axios
      .get(`${API_URL}/posts/${match.params.id}`)
      .then(({ data }) =>
        this.setState({ isLoading: false, postDetail: data })
      );
  }

  render() {
    const { classes } = this.props;
    const { isLoading, postDetail } = this.state;

    console.log(postDetail);

    return (
      <React.Fragment>
        {isLoading ? (
          <LinearProgress />
        ) : (
          <Grid justify="center" container>
            <Grid item>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      {postDetail.author.substring(0, 1)}
                    </Avatar>
                  }
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={postDetail.title}
                  subheader={new Date(
                    postDetail.timestamp
                  ).toLocaleDateString()}
                />
                <CardContent>
                  <Typography component="p">{postDetail.body}</Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <Typography variant="subheading">
                    {postDetail.voteScore}
                  </Typography>
                  <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PostDetail);
