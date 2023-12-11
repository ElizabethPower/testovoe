import React, { useEffect } from 'react';
import { useGetPostsQuery } from '../../services/api';
import PostList from '../../components/PostList';

const PostsListPage = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default PostsListPage;