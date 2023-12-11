import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsListPage from './features/posts/PostsListPage';
import PostDetailPage from './features/posts/PostDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsListPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;