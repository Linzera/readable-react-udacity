import React from 'react';

const Comment = props => {
  const { id, body, author, voteScore } = props;

  return (
    <li key={id}>
      <span>{body}</span>
      <br />
      <b>{author}</b>
      <br />
      <span>{voteScore}</span>
    </li>
  );
};

export default Comment;
