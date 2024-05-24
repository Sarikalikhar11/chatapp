import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsChatRightDotsFill } from 'react-icons/bs';
import { FaUserGroup } from 'react-icons/fa6';
import { FaCamera } from 'react-icons/fa';
import { FaHeartPulse } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fluid="md" className="navbar text-light">
      <Container fluid className="text-light">
        <Navbar.Brand href="#home" className="text-light ms-2 ">
          Secret
          <span className="nav-logo px-2 text-light ms-1 text-center ">
            Desire
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-white"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="flex justify-content-between text-white"
        >
          <Nav className="nav-links gap-3 ">
            <Nav.Link href="#home" className="active text-white">
              <BsChatRightDotsFill className="me-2" />
              Chat
            </Nav.Link>
            <Nav.Link href="#link" className="text-white ">
              <FaUserGroup className="me-2" />
              My Characters
            </Nav.Link>
            <Nav.Link href="#link" className="text-white ">
              <FaCamera className="me-2" />
              Generate Images
            </Nav.Link>
            <Nav.Link href="#link" className="link-btn text-white ">
              <FaHeartPulse className="me-2" />
              Create Character
            </Nav.Link>
          </Nav>
          <Nav className="flex-content-end text-light">
            <Nav.Link href="#home" className="text-white ">
              <FaUserCircle className="me-1" /> Profile
              <FaCaretDown className="ms-2" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
