import { useEffect } from "react";
import { fetchUserInfo, fetchUserPosts } from "../../services/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from "../../components/Post/Post";
import { TPost, TUser } from "../../services/types";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import UserCard from "../../components/UserCard/UserCard";

const UserPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

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
      <UserCard username={userInfo.username} email={userInfo.email} phone={userInfo.phone} website={userInfo.website} />
      <div className="d-flex flex-column mt-4">
        {userPosts && userPosts.map((post: TPost) => <Post pic={false} key={post.id} post={post} />)}
      </div>
    </>

  )
}

export default UserPage;