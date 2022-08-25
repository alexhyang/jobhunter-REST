import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function TopNav() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="/">Job Hunter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="https://ca.indeed.com/jobs?q=front+end+developer&l=British+Columbia&fromage=1">Indeed (BC)</Nav.Link>
            <Nav.Link href="https://ca.indeed.com/jobs?q=front+end+developer&fromage=1">Indeed (CA)</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/jobs/">LinkedIn</Nav.Link>
            <Nav.Link href="skills">Skills</Nav.Link>
            <Nav.Link href="notes">Notes</Nav.Link>
            <Nav.Link href="add_posting">Add New Posting</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
