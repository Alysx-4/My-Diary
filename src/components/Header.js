import React from 'react';
import Nav from 'react-bootstrap/Nav';
// import Nav from 'react-bootstrap/Nav';


class Header extends React.Component {
    render() {
        return (
            <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">log In</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">My Profile</Nav.Link>
  </Nav.Item>
</Nav>
        )
    }
}

export default Header;