import React from 'react';

import Comment from '../Comment';

const CommentList = props => {
  const { comments } = props;

  return (
    <ul>
      {comments.map(item => (
        <Comment
          key={item.id}
          id={item.id}
          body={item.body}
          author={item.author}
          voteScore={item.voteScore}
        />
      ))}
    </ul>
  );
};

export default CommentList;
