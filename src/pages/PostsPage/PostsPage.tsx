import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../services/actions';
import Post from '../../components/Post/Post';
import { TPost } from '../../services/types';
import Pagination from 'react-bootstrap/Pagination';
import { Spinner } from 'react-bootstrap';

const PostsPage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector((state: any) => state.posts.post);
  const isLoading = useSelector((state: any) => state.posts.isLoading);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts && posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div>
        {!isLoading && currentPosts && currentPosts.map((post: TPost) => (
          <Post key={post.id} post={post} />
        ))}
        {isLoading && <Spinner animation="border" />}
      </div>
      
      {currentPosts && <Pagination>
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => index + 1).map((page) => (
          <Pagination.Item key={page} active={page === currentPage} onClick={() => handlePageChange(page)}>
            {page}
          </Pagination.Item>
        ))}
      </Pagination>}
    </>
  );
}

export default PostsPage;