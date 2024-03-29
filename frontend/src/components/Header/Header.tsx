import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TokenContext from "../../context/TokenContext";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  const { isTokenValid, logout } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTokenValid()) {
      navigate("/login", { replace: true });
    }
  }, [isTokenValid]);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>GUI APP</Navbar.Brand>
          <Nav className="me-auto">
            {isTokenValid() && (
              <Nav.Link as={NavLink} to="/projects">
                Projects
              </Nav.Link>
            )}
          </Nav>
          <Nav className="me-end">
            {!isTokenValid() ? (
              <>
                <Nav.Link as={NavLink} to="/login" className="Button">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
