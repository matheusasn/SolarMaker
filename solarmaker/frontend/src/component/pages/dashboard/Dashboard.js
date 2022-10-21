import React, { useState, useEffect } from "react";
import { Navbar, Row, Col, Button, Container, Card, Popover, ButtonToolbar, OverlayTrigger } from "react-bootstrap";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BottomHeader from "../../layout/BottomHeader";
import {FormProjectDashboard} from "../project/Projects";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import SortIcon from "@mui/icons-material/Sort";
import { Link } from "react-router-dom";
import api from "../../../service/api"

import "./dashboard.css"

function AddDashboard() {
  
  const [data,setData] = useState()

  useEffect(() => {
    api.getProjects().then((res) => {
     setData(res)
    });
  }, []);
  
  const value = data?.map(item => item.budget).reduce((prev, curr) => prev + curr, 0).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  const valueSpent = data?.map(item => item.amount_spent).reduce((prev, curr) => prev + curr, 0).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  const valueTotal = (data?.map(item => item.budget).reduce((prev, curr) => prev + curr, 0)- data?.map(item => item.amount_spent).reduce((prev, curr) => prev + curr, 0)).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

    return (
      <Container>
        <Row>
            <Col>
                <Card className="card-style" >
                    <Card.Header className="title-style" style={{ backgroundColor: "#00ad6b"}}>Entrada</Card.Header>
                    <Card.Body>
                        <div>
                            <h3 className="h3-color">R$ {value}</h3>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card-style">
                    <Card.Header className="title-style bg-danger">Saida</Card.Header>
                    <Card.Body>
                        <div>
                            <h3 className="h3-color">R$ {valueSpent}</h3>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card-style">
                    <Card.Header className="title-style" style={{ backgroundColor: "#48aeee"}}  >Total</Card.Header>
                    <Card.Body>
                        <div>
                            <h3 className="h3-color">R$ {valueTotal}</h3>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    );
}

function handleColumnProjectList(handleDelete) {
    const columns = [
      {
        name: "name",
        selector: (row) => {
          if (navigator.language === "pt-BR") {
            return row.name_pt;
          } else {
            return row.name_en;
          }
        },
      },
      {
        name: "Ações",
        elector: (row) => row.actions,
        cell: (row) => (
          <div className="d-flex actionsIcons">
            <Link
              className="editIcon"
              to="/"
              state={{ id: row._id }}
            >
              <EditIcon className="me-3" type="button" />
            </Link>
            <Button
            //   id={row._id}
            //   handleDelete={handleDelete}
            //   title={t("deleteHealthInsurance")}
            //   description={t("deleteHealthInsuranceMsg", {
            //     name: navigator.language === "pt-BR" ? row.name_pt : row.name_en,
            //   })}
            />
          </div>
        ),
        maxWidth: "130px",
        style: {
          justifyContent: "flex-start",
          placeContent: "flex-start",
        },
      },
    ];
  return columns;
}


function FilterPeriodButton(props) {
  const handleCheck = (value) => {
    if (value !== "") {
      props.setCheckPeriod(value);
    } else {
      props.setCheckPeriod(null);
    }
  };
  
  const popoverBody = (
    <Popover title="Popover bottom">
      <Popover.Body>
        <Row
          className="p-1"
          onClick={() => {
            handleCheck("noFilter");
          }}
        >
          <Col className="px-1 check-icon-style" sm="auto">
            <CheckIcon
              className={
                props.checkPeriod === "noFilter"
                  ? "check-icon"
                  : "check-icon-hidden"
              }
            />
          </Col>
          <Col sm="auto">
            <span className="style-text-color">
              Sem filtro
            </span>
          </Col>
        </Row>

        <Row
          className="p-1"
          onClick={() => {
            handleCheck("approved");
          }}
        >
          <Col className="px-1 check-icon-style" sm="auto">
            <CheckIcon
              className={
                props.checkPeriod === "approved"
                  ? "check-icon"
                  : "check-icon-hidden"
              }
            />
          </Col>
          <Col sm="auto">
            <span className="style-text-color">
              Aprovado
            </span>
          </Col>
        </Row>

         <Row
          className="p-1"
          onClick={() => {
            handleCheck("analysis");
          }}
        >
          <Col className="px-1 check-icon-style" sm="auto">
            <CheckIcon
              className={
                props.checkPeriod === "analysis"
                  ? "check-icon"
                  : "check-icon-hidden"
              }
            />
          </Col>
          <Col sm="auto">
            <span className="style-text-color">
              Em análise
            </span>
          </Col>
        </Row>

        <Row
          className="p-1"
          onClick={() => {
            handleCheck("Disapproved");
          }}
        >
          <Col className="px-1 check-icon-style" sm="auto">
            <CheckIcon
              className={
                props.checkPeriod === "Disapproved"
                  ? "check-icon"
                  : "check-icon-hidden"
              }
            />
          </Col>
          <Col sm="auto">
            <span className="style-text-color">
              Reprovado
            </span>
          </Col>
        </Row> 
      </Popover.Body>
    </Popover>
  );


  return (
    <ButtonToolbar>
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={popoverBody}
        arrowOffsetTop={"none"}
      >
        <span id="filterPeriodButton">
          <Row>
            <Col className="ps-1 color-white" sm="auto">
              <SortIcon className="pb-1" />{" "}
              <span className="format-title">Filtrar por status</span>
            </Col>
          </Row>
        </span>
      </OverlayTrigger>
    </ButtonToolbar>
  );


}


function Dashboard() {
    var [project, setProject] = useState({ data: [], count: 0 });
    var [options, setOptions] = useState({ skip: 0, limit: 10 });
    const [checkPeriod, setCheckPeriod] = useState(null);

    const handleDelete = (id) => {
    };
    
    return (
        <>
            <BottomHeader>
                <Navbar.Brand href="#home">
                    <Row>
                        <Col>
                            <DashboardIcon className="mb-1" style={{ color: "white" }} />{" "}
                            <span className="format-title color-white">Dashboard</span>
                        </Col>
                    </Row>
                </Navbar.Brand>
                <Row>
                  <Col sm="auto">
                    <FilterPeriodButton
                      setCheckPeriod={setCheckPeriod}
                      checkPeriod={checkPeriod}
                    />
                  </Col>
                </Row>
            </BottomHeader>
            {AddDashboard()}
            {<FormProjectDashboard/>}
        </>
    );
}

export default Dashboard;