import React, { useState } from "react";
import { Navbar, Row, Col, Button, Container, Card } from "react-bootstrap";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BottomHeader from "../layout/BottomHeader";
import TableCustom from "../table/TableCustom";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

import "./dashboard.css"


function AddDashboard() {
    return (
      <Container>
        <Row>
            <Col>
                <Card className="card-style" >
                    <Card.Header className="title-style bg-success">Entrada</Card.Header>
                    <Card.Body>
                        <div>
                            <h3>R$ 150,00</h3>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card-style">
                    <Card.Header className="title-style bg-danger">Saida</Card.Header>
                    <Card.Body>
                        <div>
                            <h3>R$ 50,00</h3>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card-style">
                    <Card.Header className="title-style bg-info">Total</Card.Header>
                    <Card.Body>
                        <div>
                            <h3>R$ 100,00</h3>
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


function Dashboard() {
    var [project, setProject] = useState({ data: [], count: 0 });
    var [options, setOptions] = useState({ skip: 0, limit: 10 });

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
            </BottomHeader>
            {AddDashboard()}
            <div className="mt-3">
                <TableCustom
                    data={project.data}
                    columns={handleColumnProjectList(handleDelete)}
                    onPaginationChanged={(skip, limit) => {
                    setOptions({ skip, limit });
                    }}
                    total={project.count}
                />
            </div>
        </>
    );
}

export default Dashboard;