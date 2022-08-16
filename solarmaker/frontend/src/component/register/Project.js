import React, {useState} from "react";
import {Navbar, Row, Col, Tabs, Tab, Container, Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BottomHeader from "../layout/BottomHeader";
import {sendClients, sendProjects} from "../../service/api"
import "./project.css"

function Project(){

    const [clients, setClients] = useState({
        name: "",
        email: "",
        company_name: "",
        cpf_cnpj: ""
    })

    const [project, setProject] = useState({
        project_name: "",
        client_cpf_cnpj: "",
        description: "",
        responsible_person: "",
        representatives: "",
        initial_data: "",
        final_data: "",
        status: "",
        bugget: ""
    })

    const handleClients = (e) => {
        let id = e.target.id
        let value = e.target.value

        setClients( prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleProjects = (e) => {
        let id = e.target.id
        let value = e.target.value

        setProject( prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSendNewClients = () => {
        sendClients(clients)
    }

    const handleSendNewProject = () => {
        sendProjects(project)
    }
    
    const FormNewProject = () => {
        return (
            <Tabs
                defaultActiveKey="client"
                id="newProject"
                className="mb-3"
                >
                <Tab eventKey="client" title="Cliente">
                    <Container>
                        <Form onChange={(e) => handleClients(e)}>
                            <Form.Group className="mb-3" controlId="name" required>
                                <Form.Label className="style-title">Nome do cliente</Form.Label>
                                <Form.Control type="text" placeholder="Cliente" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email" required>
                                <Form.Label className="style-title">Email do cliente</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="company_name" required>
                                <Form.Label className="style-title">Nome do Responsável</Form.Label>
                                <Form.Control type="text" placeholder="Responsável"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="cpf_cnpj" required>
                                <Form.Label className="style-title">CPF/CNPJ</Form.Label>
                                <Form.Control type="number" placeholder="CPF/CNPJ" />
                            </Form.Group>
                        </Form>
                    </Container>
                    <div className="d-flex justify-content-end">
                        <Button onClick={handleSendNewClients} className="save-button-form">
                            Salvar
                        </Button>
                    </div>
                </Tab>
                <Tab eventKey="Project" title="Projeto">
                    <Container>
                        <Form onChange={(e) => handleProjects(e)}>
                            <Form.Group className="mb-3" controlId="project_name">
                                <Form.Label className="style-title">Nome do projeto</Form.Label>
                                <Form.Control type="text" placeholder="Projeto" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label className="style-title">Descrição</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="responsible_person">
                                <Form.Label className="style-title">Nome do Responsável</Form.Label>
                                <Form.Control type="text" placeholder="Responsável" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="representatives">
                                <Form.Label className="style-title">Nome do Representante</Form.Label>
                                <Form.Control type="text" placeholder="Representante" />
                            </Form.Group>
                        </Form>
                        <div className="d-flex justify-content-end">
                            <Button onClick={handleSendNewProject} className="save-button-form">
                                Salvar
                            </Button>
                        </div>
                    </Container>
                </Tab>
            </Tabs>
        );
    }


    return(
        <>
            <BottomHeader>
                <Navbar.Brand>
                    <Row>
                        <Col>
                            <Link className="text-decoration-none" to="/">
                            <ArrowBackIcon className="text-light" />
                                <span className="ms-2 text-light ">Cadastrar</span>
                            </Link>
                        </Col>
                    </Row>
                </Navbar.Brand>
            </BottomHeader>
            <Container>
                {FormNewProject()}
            </Container>
        </>
    );
}

export default Project;