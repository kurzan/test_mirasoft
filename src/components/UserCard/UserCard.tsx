import Card from 'react-bootstrap/Card';
import avatar from '../../images/avatar.svg';
import { TUser } from '../../services/types';
import { FC } from 'react';

type TUserProps = Partial<TUser>;

const UserCard: FC<TUserProps> = ({username, email, phone, website}) => {
 return(
  <Card style={{ width: '25rem', margin: '0 auto',}}>
  <Card.Img variant="top" src={avatar} width={150} height={150} />
  <Card.Body style={{ textAlign: 'center' }}>
    <Card.Title>{username}</Card.Title>
    <Card.Text>Email: {email}</Card.Text>
    <Card.Text>Phone: {phone}</Card.Text>
    <Card.Text>Website: {website}</Card.Text>
  </Card.Body>
</Card>
 )
};

export default UserCard;