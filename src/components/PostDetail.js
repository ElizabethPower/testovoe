import React from 'react';
import { Link } from 'react-router-dom';

const PostDetail = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default PostDetail;