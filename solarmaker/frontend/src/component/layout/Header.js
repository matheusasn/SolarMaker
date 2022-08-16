import React, { useState } from "react";
import {
  Navbar,
  Container,
  Image,
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
import "./header.css";

function ProfileButton() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const handleClick = () => {
    setShow(!show);
    setTarget(document.getElementById("profileButton"));
  };

  const handleShowPopover = () => {
    setShow(!show);
  }

  const popoverBody = (
    <Popover id="popover-contained">
      <Popover.Body className="profile-options">
        <Col className="col-options m-3 ms-0 mx-4">
            <Link to="/NewProject" onClick={handleShowPopover} className="text-dark style-options">
                Cadastrar Projeto
            </Link>
        </Col>
        <Col className="col-options m-3 ms-0 mx-4">
          <Row>
            <Col sm="auto px-0 ps-3">
              <LogoutIcon style={{ color: "#DB1F1F" }} />{" "}
                <a href="" className="text-danger style-options">
                    Sair
                </a>
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
              <Image
                className="img-profile rounded-circle"
                src="https://www.rbsdirect.com.br/filestore/4/8/0/0/1/1/1_65f4dfd162a4f43/1110084_5b23e1b5535d09d.jpg?w=1024&h=1024&a=c"
              ></Image>
              <div className="profile-user mb-1 responsive-display-username">
                Username Username
              </div>
            </Col>
            <Col className="responsive-desktop-username">
              <div className="profile-user">Username Username</div>
              <div className="profile-role">Role</div>
            </Col>
            <Col sm="auto" className="p-0 pt-1 responsive-desktop-username">
              {show ? (
                <ExpandLess className="dark" style={{ color: "green" }} />
              ) : (
                <ExpandMoreIcon style={{ color: "green" }} />
              )}
            </Col>
          </Row>
        </Button>
      </OverlayTrigger>
    </ButtonToolbar>
  );
}

function Header() {
  return (
    <Navbar className="header justify-content-between">
      <Container>
        <Navbar.Brand>
          <span className="color-white">Dashboard</span>
        </Navbar.Brand>
        <ProfileButton></ProfileButton>
      </Container>
    </Navbar>
  );
}

export default Header;
