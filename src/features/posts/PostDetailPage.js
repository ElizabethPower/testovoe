import React from 'react';
import { useGetPostByIdQuery } from '../../services/api';
import PostDetail from '../../components/PostDetail';

const PostDetailPage = ({ match }) => {
  const { postId } = match.params;
  const { data: post, isLoading, isError } = useGetPostByIdQuery(postId);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching post</p>;

  return (
    <div>
      <h1>Post Detail</h1>
      <PostDetail post={post} />
    </div>
  );
};

export default PostDetailPage;