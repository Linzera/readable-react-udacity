import React from 'react';
import axios from 'axios';
import classnames from 'classnames';
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
  withStyles,
  Collapse,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

class PostDetail extends React.Component {
  state = {
    isLoading: true,
    postDetail: {},
    comments: [],
    isExpanded: false
  };

  componentDidMount() {
    const { match } = this.props;

    axios
      .get(`${API_URL}/posts/${match.params.id}`)
      .then(({ data }) =>
        this.setState({ isLoading: false, postDetail: data })
      );

    axios
      .get(`${API_URL}/posts/${match.params.id}/comments`)
      .then(({ data }) => this.setState({ comments: data }));
  }

  handleExpand = () =>
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));

  render() {
    const { classes } = this.props;
    const { isLoading, postDetail, isExpanded, comments } = this.state;

    console.log(comments);

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
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: isExpanded
                    })}
                    onClick={this.handleExpand}
                    aria-expanded={isExpanded}
                    aria-label="Show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <List>
                      {comments.map(item => (
                        <ListItem key={item.id} alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar
                              aria-label="Recipe"
                              className={classes.avatar}
                            >
                              {item.author.substring(0, 1)}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={item.author}
                            secondary={item.body}
                          />
                          <ListItemIcon>
                            <React.Fragment>
                              <Typography
                                variant="subheading"
                                style={{ marginTop: 10 }}
                              >
                                {item.voteScore}
                              </Typography>
                              <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                              </IconButton>
                            </React.Fragment>
                          </ListItemIcon>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PostDetail);
