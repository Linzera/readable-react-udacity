import React from 'react';

import Post from '../Post';

const PostList = props => {
  const { posts } = props;

  posts.sort((a, b) => a.voteScore + b.voteScore);

  return (
    <React.Fragment>
      {posts.map(item => (
        <Post
          key={item.id}
          id={item.id}
          title={item.title}
          body={item.bo}
          author={item.author}
          category={item.category}
          timestamp={item.timestamp}
        />
      ))}
    </React.Fragment>
  );
};

export default PostList;
