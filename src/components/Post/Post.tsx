import React, { useEffect, useState } from 'react';
import avatar from "../../images/avatar.svg";
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TComment, TPost } from "../../services/types";
import { FC } from "react";
import { fetchComments } from '../../services/actions';
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";

type TPostProps = {
  post: TPost
}

const Post: FC<TPostProps> = ({ post }) => {

  const [commentsIspen, setCommentsIsOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const comments = useSelector((state: any) => state?.comments.comments);
  const isLoading = useSelector((state: any) => state?.comments.isLoading);

  const handleCommets = () => {
    setCommentsIsOpen(!commentsIspen);

    if (!commentsIspen) {
      dispatch(fetchComments());
    }

  };

  return (
    <Card className='mb-4'>
      <Card.Body>
        <div className='d-flex gap-3'>
          <img onClick={() => navigate(`users/${post.userId}`)} src={avatar} alt="user"/>
          <div>
            <p className='fs-4 fw-bold'>{post.title}</p>
            <p className='fs-7'>{post.body}</p>
          </div>
        </div>

        <Button className='mb-4' onClick={handleCommets}>Комментарии</Button>

        


        {commentsIspen && <div>

          {isLoading && <Spinner animation="border" />}

          {!isLoading && comments && comments.filter((item: TComment) => item.postId === post.id).map((item: TComment) => (
          <Accordion className='mb-4' key={item.id} defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{item.email}</Accordion.Header>
              <Accordion.Body>
                  {item.body}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}

        </div>}



      </Card.Body>
    </Card>
  )
}

export default Post;