import React from 'react';
import { Link } from 'react-router-dom';

class PostDetail extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Detail</h1>
      </div>
    );
  }
}

export default PostDetail;
