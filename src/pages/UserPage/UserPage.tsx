import { useEffect } from "react";
import { fetchUserInfo, fetchUserPosts } from "../../services/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from "../../components/Post/Post";
import { TPost, TUser } from "../../services/types";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import UserCard from "../../components/UserCard/UserCard";
import { Spinner } from 'react-bootstrap';

const UserPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const isLoading = useSelector((state: any) => state.posts.isLoading);

  useEffect(() => {
    dispatch(fetchUserPosts(id));
  }, [dispatch, id]);


  useEffect(() => {
    dispatch(fetchUserInfo(id));
  }, [dispatch, id]);

  const userPosts = useSelector((state: any) => state.user.posts);
  const userInfo: TUser = useSelector((state: any) => state.user.info);

  useEffect(() => {
    console.log(userInfo)
  }, [dispatch, userInfo]);


  return (
    <>
      <Button className="mt-4" onClick={() => navigate(-1)}>Назад</Button>
      {isLoading ? <Spinner animation='border' /> : <UserCard username={userInfo.username} email={userInfo.email} phone={userInfo.phone} website={userInfo.website} />}
      <div className="d-flex flex-column mt-4">
      <p className='fs-4 fw-bold'>Посты пользователя</p>
        {isLoading && <Spinner animation='border' />}
        {!isLoading && userPosts && userPosts.map((post: TPost) => <Post pic={false} key={post.id} post={post} />)}
      </div>
    </>

  )
}

export default UserPage;