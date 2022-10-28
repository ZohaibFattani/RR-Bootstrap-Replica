import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

const TopBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img src="https://placekitten.com/200/300" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <h1>Order groceries for delivery or pickup today</h1>
        <p>Whatever you want from local stores, brought right to your door.</p>
      </div>
    </div>
  );
};

export default TopBar;
