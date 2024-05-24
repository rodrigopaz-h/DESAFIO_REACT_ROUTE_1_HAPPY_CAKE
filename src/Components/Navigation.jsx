import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCakeCandles, faHouse } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from'react-router-dom'

export function Navigation() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>        
          <Nav className="gap-3">
            <Link to="/">
              <span><FontAwesomeIcon icon={faHouse} /></span> Home
                </Link>
            <Link to="/Contact"><span><FontAwesomeIcon icon={faAddressBook} /></span> Contacto</Link>
          </Nav>
          <Navbar.Brand>Happy Cake <span><FontAwesomeIcon icon={faCakeCandles} /></span></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}