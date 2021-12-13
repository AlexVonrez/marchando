import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";

const authService = new AuthService();

const Navigation = ({ loggedUser, storeUser }) => {
  const logout = () => {
    authService
      .logout()
      .then((response) => storeUser(null))
      .catch((err) => console.log(err));
  };

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            {" "}
            🔥 Inicio
          </Nav.Link>
          {loggedUser ? (
            <>
              <Nav.Link as={Link} to="/restaurantes">
                Restaurantes
              </Nav.Link>

              {loggedUser.role === "USER" && (
                <Nav.Link as={Link} to="/perfil">
                  Tus Reservas
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/" onClick={logout}>
                Logout
              </Nav.Link>
              {loggedUser.role === "RESTAURANT" && (
                <>
                  <Nav.Link as={Link} to="/nuevo-restaurante">
                    Crear Restaurante
                  </Nav.Link>
                  <Nav.Link as={Link} to="restaurantProfile">
                    Crear Reserva
                  </Nav.Link>
                </>
              )}
              {loggedUser.role === "ADMIN" && (
                <>
                  <Nav.Link as={Link} to="/adminpage">
                    Página admin
                  </Nav.Link>
                  <Nav.Link as={Link} to="/acceptedRestaurants">
                    Restaurantes aprobados
                  </Nav.Link>
                  <Nav.Link as={Link} to="/rejectedRestaurants">
                    Restaurantes rechazados
                  </Nav.Link>
                </>
              )}
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/signup">
                Registro
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
