import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../Components.css";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

// const prevDef = (e) => {
//   e.preventDefault();
//   console.log(e);
// };

const NavbarComponent = () => {
  const { user, logout } = useAuth();
  return (
    // <Navbar expand="lg" fixed="top" bg="dark">
    //   <Container fluid>
    //     <img
    //       className="pe-2"
    //       style={{ width: 50, height: 50 }}
    //       src={logo}
    //       alt="logo"
    //     />
    //     <Navbar.Brand href="#home">
    //       <p>
    //         Bucket<span> &lt;li&gt;</span>
    //       </p>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Offcanvas.Body>
    //         <Nav className="ms-auto" variant="tabs" defaultActiveKey="/">
    //           <Nav.Item>
    //             <NavLink href="/">Home</NavLink>
    //           </Nav.Item>
    //           <Nav.Item>
    //             <NavLink href="/about">About</NavLink>
    //           </Nav.Item>
    //           <Nav.Item>
    //             <NavLink href="#f">Features</NavLink>
    //           </Nav.Item>
    //           <Nav.Item>
    //             <NavLink href="/bucket">My Bucket</NavLink>
    //           </Nav.Item>
    //           <Nav.Item>
    //             <NavLink href="/signin">Sign In</NavLink>
    //           </Nav.Item>
    //         </Nav>
    //       </Offcanvas.Body>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar expand="lg" className="mb-3 navbar-dark bg-dark" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <div className="brand-container">
          <img
            className="pe-2"
            style={{ width: 50, height: 50 }}
            src={logo}
            alt="logo"
          />
          <Navbar.Brand to="/">
            <p>
              Bucket<span> &lt;li&gt;</span>
            </p>
          </Navbar.Brand>
        </div>
        <div style={{ width: "50px", height: "10px" }}></div>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="start"
          className="bg-dark"
        >
          <Offcanvas.Body className="justify-content-end">
            <Nav
              className="ms-auto mt-0 mt-xs-4"
              variant="tabs"
              defaultActiveKey="/"
            >
              <Nav.Item>
                <NavLink to="/">Home</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/about">About Us</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/features">Features</NavLink>
              </Nav.Item>
              {user && (
                <Nav.Item>
                  <NavLink to="/bucket">MyBucket</NavLink>
                </Nav.Item>
              )}
              {user ? (
                <Nav.Item>
                  <NavLink to="/" onClick={logout}>
                    Logout
                  </NavLink>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <NavLink to="/signin">Signin</NavLink>
                </Nav.Item>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
