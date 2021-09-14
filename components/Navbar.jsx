import Link from "next/link";
import { Navbar as NavbarBS, Container, Nav } from "react-bootstrap";

export default function Navbar() {
  const isLoggedIn = false

  return (
    <>
      <NavbarBS bg="light" expand="lg" className="fixed-top">
        <Container fluid>
          <NavbarBS.Brand style={{ cursor: 'pointer' }}>
            <Link href="/">
              <img
                src="/img/typing.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Link>
          </NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBS.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
              <Link href="/posts">
                <a className="nav-link">Posts</a>
              </Link>
              <Link href="/authors">
                <a className="nav-link">Authors</a>
              </Link>
            </Nav>
            <Nav>
              {isLoggedIn ? (
                <>
                  <Link href="/profile">
                    <a className="nav-link">Profile</a>
                  </Link>
                  <Link href="/logout">
                    <a className="nav-link">Logout</a>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <a className="nav-link">Login</a>
                  </Link>
                  <Link href="/register">
                    <a className="nav-link">Register</a>
                  </Link>
                </>
              )}
            </Nav>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>
    </>
  );
}
