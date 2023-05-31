import Header from "../../components/Header/Header";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';

const Layout = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Header />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>

  )
}

export default Layout;