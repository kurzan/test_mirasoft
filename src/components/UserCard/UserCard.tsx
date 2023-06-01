import Card from 'react-bootstrap/Card';
import avatar from '../../images/avatar.svg';
import { TUser } from '../../services/types';
import { FC } from 'react';

type TUserProps = Partial<TUser> & {ava?: any, width?: string};

const UserCard: FC<TUserProps> = ({username, email, phone, website, ava, width = '25rem'}) => {
 return(
  <Card style={{ width: width, margin: '0 auto'}} className='mt-4'>
  <Card.Img className='mt-4' variant="top" src={ava ? ava : avatar} width={'150px'} height={'350px'} />
  <Card.Body style={{ textAlign: 'center' }}>
    <Card.Title>{username}</Card.Title>
    <Card.Text>Email: {email}</Card.Text>
    {phone && <Card.Text>Phone: {phone}</Card.Text>}
    {website && <Card.Text>Website: {website}</Card.Text>}
  </Card.Body>
</Card>
 )
};

export default UserCard;