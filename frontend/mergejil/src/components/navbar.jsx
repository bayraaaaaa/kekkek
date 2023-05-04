import React, { useState } from "react";
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  const [currentPage, setCurrentPage] = useState("Home");
  const object = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Course",
    },
    {
      title: "Instructor",
    },
    {
      title: "Blog",
    },
    {
      title: "Contact",
    },
  ];
  return (
    <>
      <div>
        <Navbar
          variant="pills"
          defaultActiveKey="/home"
          className="navbarPills"
        >
          <Container className="navbarContainer">
            <Navbar.Brand href="/home" style={{ color: "white" }}>
              Navbar
            </Navbar.Brand>
            <Nav className="categoryNavbar">
              {object.map((el) => {
                if (el.title === currentPage) {
                  return (
                    <Nav.Link
                      onClick={() => setCurrentPage(el.title)}
                      style={{ color: "rgb(50, 132, 199)" }}
                    >
                      {el.title}
                    </Nav.Link>
                  );
                }
                return (
                  <Nav.Link
                    onClick={() => setCurrentPage(el.title)}
                    style={{ color: "white" }}
                  >
                    {el.title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarComponent;
