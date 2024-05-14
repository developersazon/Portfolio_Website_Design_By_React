import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ContactPage from '../ContactPage/Contact-page';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Switch,
  Route,
  Link,
  Router,
} from "react-router-dom";



export default function Header() {
  return (

               <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand as={Link} to='/'>
                  <img
                        src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                        height='30'
                        alt=''
                        loading='lazy'
                  />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="ms-auto px-5 my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                    
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/about'>About</Nav.Link>
                  <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
                  <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                      {/* <NavDropdown title="More" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#">Our Story</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                          Mission
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                          Vission
                        </NavDropdown.Item>
                      </NavDropdown> */}
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-primary">Search</Button>
                    </Form>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

  );
}
