import React, { useEffect, useState } from 'react';
import avatar from "../../images/avatar.svg";
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TComment, TPost } from "../../services/types";
import { FC } from "react";
import { fetchComments } from '../../services/actions';

type TPostProps = {
  post: TPost
}

const Post: FC<TPostProps> = ({post}) => {

  const [commentsIspen, setCommentsIsOpen] = useState(false);

  const dispatch = useDispatch();
  const comments = useSelector((state: any) => state?.comments.comments);

  const handleCommets = () => {
    setCommentsIsOpen(!commentsIspen);

    if(!commentsIspen) {
      dispatch(fetchComments());
    }
  
  };

  return(
    <Card>
      <Card.Body>
        <img src={avatar} alt="user" />
        <p>{post.title}</p>
        <p>{post.body}</p>
        <Button onClick={handleCommets}>Комментарии</Button>

        {commentsIspen && comments && comments.filter((item:TComment) => item.postId === post.id).map((item: TComment) => (
          <div key={item.id}>
            <p>{item.email}</p>
            <p>{item.body}</p>
          </div>
        ))}

      </Card.Body>
    </Card>
  )
}

export default Post;