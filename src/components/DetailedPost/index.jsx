import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { API_URL } from '../../util/constants';
import CommentList from '../CommentList';

class DetailedPost extends React.Component {
  state = {
    comments: [],
    loadingComments: true
  };

  componentDidMount() {
    const { id } = this.props;

    this.fetchComments(id).then(res =>
      this.setState({ comments: res.data, loadingComments: false })
    );
  }

  fetchComments = async id => Axios.get(`${API_URL}/posts/${id}/comments`);

  render() {
    const { id, title, body, author, timestamp } = this.props;
    const { loadingComments, comments } = this.state;

    return (
      <li key={id}>
        <div className="post-container">
          <div className="post">
            <h1>{title}</h1>
            <p>{body}</p>
            <span>{author}</span>
            <br />
            <h4>{timestamp}</h4>
          </div>
          {loadingComments ? (
            <h4>loading</h4>
          ) : (
            <CommentList comments={comments} />
          )}
        </div>
      </li>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps)(DetailedPost);
