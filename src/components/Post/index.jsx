import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar } from '@material-ui/core';

class Post extends React.Component {
  state = {};

  render() {
    const { id, title, author, category } = this.props;

    return (
      <div style={{ margin: 15 }}>
        <Card>
          <CardHeader
            avatar={<Avatar aria-label={author}>{author.charAt(0)}</Avatar>}
            title={<Link to={`/posts/${id}`}>{title}</Link>}
            subheader={<Link to={`/categories/${category}`}>{category}</Link>}
          />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps)(Post);
