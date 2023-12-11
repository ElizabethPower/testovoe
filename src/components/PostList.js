import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id} - {post.title} - {post.body.slice(0, 50)}...
          <Link to={`/posts/${post.id}`}>View</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;