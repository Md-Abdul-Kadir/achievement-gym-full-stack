import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Navbar.css";

const NavigationBar = () => {
  const { signInUsingGoogle, user, logOut } = useAuth();
  return (
    <>
      {/* <span className="text-light">{ user.displayName}</span>
                    <button onClick={signInUsingGoogle} className="btn-outline-secondary px-4 py-2 rounded"> LOG IN</button> */}

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top navheight">
        <div class="container">
          <a className="navbar-brand" href="#">
          Achievement <span className="text-danger">Gym</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto px-5">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link as={Link} to="/ourtrainer">
                Our Trainer
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus">
                About Us
              </Nav.Link>

              {user.displayName ? (
                <Navbar.Text className="ms-5">
                  Signned is as : <a href="#login">{user.displayName}</a>
                </Navbar.Text>
              ) : (
                ""
              )}
              {user.displayName ? (
                <button
                  onClick={logOut}
                  className="btn btn-secondary rounded ms-4"
                  variant="light"
                >
                  LogOut
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  LOG-IN
                </Nav.Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
