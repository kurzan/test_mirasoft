import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return(
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">MitraSoft</Navbar.Brand>
    </Container>
  </Navbar>
  </>
  )
};

export default Header;