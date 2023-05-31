import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../services/actions';
import Post from '../../components/Post/Post';
import { TPost } from '../../services/types';
import Pagination from 'react-bootstrap/Pagination';

const PostsPage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.data.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div>
        {currentPosts.map((post: TPost) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      
      <Pagination>
        {Array.from({ length: Math.ceil(posts.data.length / postsPerPage) }, (_, index) => index + 1).map((page) => (
          <Pagination.Item key={page} active={page === currentPage} onClick={() => handlePageChange(page)}>
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
}

export default PostsPage;