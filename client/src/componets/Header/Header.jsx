import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Header() {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [Status, setStatus] = useState(null);

  const token = cookies.jwt;

  const navigate = useNavigate();
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );

     
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        }
  
      }
    };
    const getStatus = async () => {
      let applicationData = await axios.get(
        `http://localhost:4000/status/${token}`
      );
     

      setStatus(applicationData.data.data);
    };
    verifyUser();
    getStatus();
  }, [cookies, navigate, removeCookie]);
  const logOut = () => {
    removeCookie("jwt");
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <Navbar bg="success" expand="lg">
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/")}>
            INCUBATOR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-4 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              > 
              {Status == null ? (
              <Nav.Link onClick={() => navigate("/AddIncubator")}>
                Add New Applications
              </Nav.Link>
                ) : (
                  ""
                )}
            </Nav>
            <Form className="d-flex">
              <Button variant="light" onClick={logOut}>
                Logout
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
