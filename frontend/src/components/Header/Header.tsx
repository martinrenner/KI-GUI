import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
   return (
      <>
         <Navbar bg="light">
            <Container>
               <Navbar.Brand>GUI APP</Navbar.Brand>
               <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/projects">
                     Projects
                  </Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      </>
   );
}

export default Header;
