import React, { useState, useEffect } from "react";
import { Navbar, Row, Col, Form, Container, Button } from "react-bootstrap"
import BottomHeader from "../layout/BottomHeader";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TableCustom from "../table/TableCustom"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from 'react-toastify';
import api from "../../service/api"
import AddIcon from "@mui/icons-material/Add";

import "./tableProject.css"

function handleColumnProjectList(handleDelete) {
    const columns = [
      {
        name: "Nome",
        selector: (row) => row.client
      },
      {
        name: "Projeto",
        selector: (row) => row.project_name
      },
      {
        name: "Potência",
        selector: (row) => row.potency
      },
      {
        name: "Responsável",
        selector: (row) => row.responsible
      },
      {
        name: "Status",
        selector: (row) => row.status
      },
      {
        name: "Valor",
        selector: (row) => row.budget.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      },
      {
        name: "Ações",
        elector: (row) => row.actions,
        cell: (row) => (
          <div className="d-flex actionsIcons">
            <Link
              className="editIcon"
              to="/"
              state={{ id: row.id }}
            >
            <EditIcon className="me-3" type="button" style={{color: "#ff7a00"}}/>
            </Link>
            
            <button id={row.id} onClick={handleDelete}></button>
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

function Project() {

    var [project, setProject] = useState({ data: [], count: 0 });
    var [options, setOptions] = useState({ skip: 0, limit: 10 });

    useEffect(() => {
      api.getProjects().then((res) => {
        setProject({ data: res, count: res.len });
      });
    }, [options]);
    
    const handleDelete = (event) => {
      let id = event.target.id
       api.deleteProjects(id).then((res) => {
        toast.success("Deletado com sucesso");
        api.getProjects().then((res) => {
          setProject({ data: res, count: res.len });
        });
      }).catch((e) => {
        toast.error(`Error ao deletar projeto`);
      }) 
    };

    return (
        <>
            <BottomHeader>
                <Navbar.Brand href="#home">
                    <Row>
                        <Col>
                            <Link className="text-decoration-none" to="/">
                                <ArrowBackIcon className="text-light" />
                                <span className="text-light">Dashboard</span>
                            </Link>
                        </Col>
                    </Row>
                </Navbar.Brand>
                <Row>
                  <Col sm="auto">
                    <Form>
                        <Form.Group controlId="formBasicSearch">
                            <Form.Control className="search-style" type="text" placeholder="Pesquisar" />
                        </Form.Group>
                    </Form>
                  </Col>
                </Row>
            </BottomHeader>
            <Container>
              <div className="container-add">
                <Link to={"/NewProject"}>
                  <Button className="add-button">
                    <div className="d-flex div-button">
                      <span>Projeto</span>
                      <AddIcon />
                    </div>
                  </Button>
                </Link>
              </div>
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
            </Container>
        </>
    )
}
function TableProjectDashboard(){
  var [project, setProject] = useState({ data: [], count: 0 });
    var [options, setOptions] = useState({ skip: 0, limit: 10 });

    useEffect(() => {
      api.getProjects().then((res) => {
        setProject({ data: res, count: res.len });
      });
    }, [options]);

    const handleDelete = (id) => {
    };

    return (
        <>
            <Container>
              <div className="container-add">
                <Link to={"/NewProject"}>
                  <Button className="add-button">
                    <div className="d-flex div-button">
                      <span>Projeto</span>
                      <AddIcon />
                    </div>
                  </Button>
                </Link>
              </div>
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
            </Container>
        </>
    )
}

export default Project
export {TableProjectDashboard}
