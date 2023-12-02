import { Navbar, Nav, Container } from "react-bootstrap"
import './Navbar.css'

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" className="n-wrapper my-3 mx-5">
        <Container fluid>
          <Navbar.Brand href="#home" className="n-logo">Joseph.<span>Code</span></Navbar.Brand>
          <span>Toggler</span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="n-links ms-auto mx-4">
              <Nav.Link href="#home" className="text-black">Home</Nav.Link>
              <Nav.Link href="#link" className="text-black">Services</Nav.Link>
              <Nav.Link href="#link" className="text-black">Experience</Nav.Link>
              <Nav.Link href="#link" className="text-black">Portfolio</Nav.Link>
              <Nav.Link href="#link" className="text-black">Team</Nav.Link>
            </Nav>
            <button type="button n-button ">Contact Us</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar