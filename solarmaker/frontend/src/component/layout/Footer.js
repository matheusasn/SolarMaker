import React from "react";
import "./footer.css";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Row className="footer row justify-content-between">
      <Col>Todos os direitos reservados - SolarMaker 2022</Col>
      <Col>Política de Privacidade</Col>
    </Row>
  );
}

export default Footer;