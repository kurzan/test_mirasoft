import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../services/actions';
import Post from '../../components/Post/Post';
import { TPost } from '../../services/types';
import Pagination from 'react-bootstrap/Pagination';
import { Spinner } from 'react-bootstrap';
import { Search } from '../../components/Search/Search';
import { useSearchParams } from 'react-router-dom';

const PostsPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const postsPerPage = 5;

  const dispatch = useDispatch();
  const posts: TPost[] = useSelector((state: any) => state.posts.post);
  const isLoading = useSelector((state: any) => state.posts.isLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const [sortByField, sortOrderField] = value.split('_');
    setSortBy(sortByField);
    setSortOrder(sortOrderField === 'asc' ? 'asc' : 'desc');
  };

  const filteredPosts = useMemo(() => {
    try {
      const search = searchParams.get('search') || '';
      const sortedPosts = posts.slice().sort((a: TPost, b: TPost) => {
        if (sortBy && typeof a[sortBy as keyof TPost] === 'string' && typeof b[sortBy as keyof TPost] === 'string') {
          if (sortOrder === 'asc') {
            return a[sortBy as keyof TPost] < b[sortBy as keyof TPost] ? -1 : 1;
          } else {
            return a[sortBy as keyof TPost] > b[sortBy as keyof TPost] ? -1 : 1;
          }
        }
        return 0;
      });
      return sortedPosts.filter((post: TPost) => {
        const title = post.title?.toLowerCase() || '';
        return title.includes(search);
      });
    } catch (error) {
      return posts;
    }
  }, [searchParams, posts, sortBy, sortOrder]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className='mt-4'>
        <Search placeholder='Поиск по заголовку' setSearch={setSearchValue} />
        <p className='fs-4 fw-bold'>Список постов</p>

        <div className='mb-3'>
          <label htmlFor='sortSelect' className='form-label'>Сортировка:</label>
          <select id='sortSelect' className='form-select' onChange={handleSortChange}>
            <option value=''>Без сортировки</option>
            <option value='title_asc'>По заголовку (возрастающая)</option>
            <option value='title_desc'>По заголовку (убывающая)</option>
          </select>
        </div>

        {!isLoading && currentPosts.map((post: TPost) => (
          <Post key={post.id} post={post} />
        ))}
        {isLoading && <Spinner animation='border' />}
      </div>

      {currentPosts.length > 0 && (
        <Pagination>
          {Array.from(
            { length: Math.ceil(filteredPosts.length / postsPerPage) },
            (_, index) => index + 1
          ).map((page) => (
            <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </>
  );
};

export default PostsPage;