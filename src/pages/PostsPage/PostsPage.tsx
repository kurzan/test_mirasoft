import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../services/actions';
import Post from '../../components/Post/Post';
import { TPost } from '../../services/types';

const PostsPage = () => {

  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  
 return(
    <div>
      {posts.data && posts.data.map((post: TPost) => <Post post={post}/>)}
    </div>
 )
}

export default PostsPage;