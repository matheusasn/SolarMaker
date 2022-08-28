import React, { useState } from "react";
import {
  Navbar,
  Container,
  Button,
  Popover,
  Row,
  Col,
  OverlayTrigger,
  ButtonToolbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ExpandLess } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import api from "../../service/api"
import "./header.css";

function ProfileButton(props) {
  console.log(props)
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleShowPopover = () => {
    setShow(!show);
  }

  const handleLogout = () => {
    try {
      api.refreshToken();
    } catch (err) {
      console.log("Coult not handle logout", err)
    }
  }

  const popoverBody = (
    <Popover id="popover-contained">
      <Popover.Body>
      <Col className="m-3 ms-0 mx-4">
            <Link to="/" onClick={handleShowPopover} className="style-options style-text-color">
                Dashboard
            </Link>
        </Col>
        {props.typeUser === true ? 
          <Col className="m-3 ms-0 mx-4">
            <Link to="/Users" onClick={handleShowPopover} className="style-options style-text-color">
              Gerenciar Usuários
            </Link>
          </Col>
        :null }
        <Col className="m-3 ms-0 mx-4">
            <Link to="/Clients" onClick={handleShowPopover} className="style-options style-text-color">
              Gerenciar Clientes
            </Link>
        </Col>
        <Col className="m-3 ms-0 mx-4">
            <Link to="/Projects" onClick={handleShowPopover} className="style-options style-text-color">
              Gerenciar Projetos
            </Link>
        </Col>
        <Col className="m-3 ms-0 mx-4">
          <Row>
            <Col sm="auto px-0 ps-3">
              <LogoutIcon style={{ color: "#DB1F1F" }} />{" "}
                <span className="text-danger style-options" onClick={handleLogout}>
                    Sair
                </span>
            </Col>
          </Row>
        </Col>
      </Popover.Body>
    </Popover>
  );

  return (
    <ButtonToolbar>
      <OverlayTrigger
        onToggle={() => setShow(false)}
        show={show}
        trigger="click"
        rootClose
        placement="bottom"
        overlay={popoverBody}
        arrowOffsetTop={"none"}
      >
        <Button
          id="profileButton"
          onClick={handleClick}
          className="profile-button"
        >
          <Row>
            <Col sm="auto" className="col-img-profile">
              <div className="profile-user mb-1 responsive-display-username">
                Admin
              </div>
            </Col>
            <Col className="responsive-desktop-username">
              <div className="profile-user">Usuário SolarMaker</div>
              <div className="profile-role">admin</div>
            </Col>
            <Col sm="auto" className="p-0 responsive-desktop-username style-expand-col">
              {show ? (
                <ExpandLess className="icon-style-expand"/>
              ) : (
                <ExpandMoreIcon className="icon-style-expand"/>
              )}
            </Col>
          </Row>
        </Button>
      </OverlayTrigger>
    </ButtonToolbar>
  );
}

function Header(props) {
  return (
    <Navbar className="header justify-content-between">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="style-dashboard"><span className="style-logo">SolarMaker</span></Link>
        </Navbar.Brand>
        <ProfileButton typeUser={props.typeUser}></ProfileButton>
      </Container>
    </Navbar>
  );
}

export default Header;
