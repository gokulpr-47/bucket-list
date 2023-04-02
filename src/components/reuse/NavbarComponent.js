import logo from "../../assets/logo.png";
// import { NavLink } from "react-router-dom";
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
    //             <Nav.Link href="/">Home</Nav.Link>
    //           </Nav.Item>
    //           <Nav.Item>
    //             <Nav.Link href="/about">About</Nav.Link>
    //           </Nav.Item>
    //           <Nav.Item>
    //             <Nav.Link href="#f">Features</Nav.Link>
    //           </Nav.Item>
    //           <Nav.Item>
    //             <Nav.Link href="/bucket">My Bucket</Nav.Link>
    //           </Nav.Item>
    //           <Nav.Item>
    //             <Nav.Link href="/signin">Sign In</Nav.Link>
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
                <Nav.Link to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link to="/about">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link to="/features">Features</Nav.Link>
              </Nav.Item>
              {user && (
                <Nav.Item>
                  <Nav.Link to="/bucket">MyBucket</Nav.Link>
                </Nav.Item>
              )}
              {user ? (
                <Nav.Item>
                  <Nav.Link to="/" onClick={logout}>
                    Logout
                  </Nav.Link>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <Nav.Link to="/signin">Signin</Nav.Link>
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
