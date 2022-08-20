import React from "react";
import { Navbar, Container } from "react-bootstrap";

function BottomHeader(props) {
  return (
    <Navbar className="justify-content-between mb-4" style={{background: "#ff7a00"}}>
      <Container>{props.children}</Container>
    </Navbar>
  );
}

export default BottomHeader;