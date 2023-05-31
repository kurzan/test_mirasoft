import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchUserPosts } from './services/actions';
import { fetchUserInfo } from './services/actions';

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  

  useEffect(() => {
    dispatch(fetchUserInfo(1));
    dispatch(fetchUserPosts(1));
    
  }, [dispatch]);


  return (
    <div>
      {posts.data && posts.data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;