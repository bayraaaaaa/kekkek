import React, { useState } from "react";
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link } from "react-router-dom"
function NavbarComponent() {
  const [currentPage, setCurrentPage] = useState("Home");
  const object = [
    {
      title: "Home",
      href: "",
    },
    {
      title: "About",
      href: "About",
    },
    {
      title: "Course",
      href: "Course",
    },
    {
      title: "Instructor",
      href: "Instructor",
    },
    {
      title: "Blog",
      href: "Blog",
    },
    {
      title: "Contact",
      href: "Contact",
    },
  ];
  return (
    <>
      <div>
        <Navbar
          variant="pills"
          defaultActiveKey="/home"
          className="navbarPills"
          style={{ backgroundColor: "transparent", zIndex: "3" }}
        >
          <Container className="navbarContainer">
            <Navbar.Brand href="/" style={{ color: "white" }}>
              Navbar
            </Navbar.Brand>
            <Nav className="categoryNavbar">
              {object.map((el) => {
                if (el.title === currentPage) {
                  return (
                    <div>
                    
                     {/* <Nav.Link
                      onClick={() => setCurrentPage(el.title)}
                      style={{ color: "rgb(50, 132, 199)" }}
                      > */}
                        <Link to={`/${el.href}`} onClick={() => setCurrentPage(el.title)}  style={{ color: "rgb(50, 132, 199)", textDecoration:"none" }}>
                          {el.title}
                        </Link>
                      
                    {/* </Nav.Link> */}
                    
                   </div>
                  );
                }
                return (
                  // <Nav.Link
                  //   onClick={() => setCurrentPage(el.title)}
                  //   style={{ color: "white" }}
                  // >
                  <Link to={`/${el.href}`} onClick={() => setCurrentPage(el.title)}  style={{ color: "white", textDecoration:"none" }}>
                    {el.title}
                  </Link>
                  // </Nav.Link>
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
