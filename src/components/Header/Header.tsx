import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import UserCard from '../UserCard/UserCard';
import photo from '../../images/kurz.jpg';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MitraSoft</Navbar.Brand>
          <Button onClick={handleShow}>🍔</Button>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Меню</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <UserCard width='100%' ava={photo} email='kurzanbl4@gmail.com' username='Михаил' />
          <Nav className="flex-column">
            <Nav.Link href="/">Список постов</Nav.Link>
            <Nav.Link href="/about-me">Обо мне</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
};

export default Header;