import React, {useState} from "react";
import {Navbar, Row, Col, Tabs, Tab, Container, Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BottomHeader from "../layout/BottomHeader";
import notifications from "../../util/notifications";
import { toast } from 'react-toastify';
import api from "../../service/api"
import "./project.css"

function Project(){

    const [clients, setClients] = useState({
        name: "",
        email: "",
        phone_number: "",
        adress: "",
        cpf_cnpj: "",
       
    })

    const [project, setProject] = useState({
        project_name: "",
        client: "",
        description: "",
        responsible: "",
        vendor: "",
        potency: "",
        modules: "",
        inverter: "",
        status: "",
        budget: ""
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

        api
        .sendClients(clients)
        .then((res) => {
            toast.success("Cliente cadastrado com sucesso")
        })
        .catch((e) => {
            toast.error(`Erro ao cadastrar cliente`);
        });
    }

    const handleSendNewProject = () => {
        api.sendProjects(project)
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
                            <Form.Group className="mb-3" controlId="phone_number" required>
                                <Form.Label className="style-title">Telefone</Form.Label>
                                <Form.Control type="text" placeholder="Telefone" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="adress" required>
                                <Form.Label className="style-title">Endereço</Form.Label>
                                <Form.Control type="text" placeholder="Endereço"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="cpf_cnpj" required>
                                <Form.Label className="style-title">CPF/CNPJ</Form.Label>
                                <Form.Control type="number" placeholder="CPF/CNPJ" />
                            </Form.Group>
                        </Form>
                    </Container>
                    <div className="d-flex justify-content-end">
                        <Button onClick={handleSendNewClients} className="save-button-form">
                            Cadastrar
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
                            <Form.Group className="mb-3" controlId="responsible">
                                <Form.Label className="style-title">Nome do Responsável</Form.Label>
                                <Form.Control type="text" placeholder="Responsável" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="client">
                                <Form.Label className="style-title">CPF/CNPJ</Form.Label>
                                <Form.Control type="text" placeholder="CPF/CNPJ" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="vendor">
                                <Form.Label className="style-title">Vendedor</Form.Label>
                                <Form.Control type="text" placeholder="Vendedor" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="potency">
                                <Form.Label className="style-title">Potencia</Form.Label>
                                <Form.Control type="text" placeholder="Potencia" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="status">
                                <Form.Label className="style-title">Status</Form.Label>
                                <Form.Control type="text" placeholder="Status" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="modules">
                                <Form.Label className="style-title">Modules</Form.Label>
                                <Form.Control type="text" placeholder="bug" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="inverter">
                                <Form.Label className="style-title">Inverter</Form.Label>
                                <Form.Control type="text" placeholder="bug" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="budget">
                                <Form.Label className="style-title">Bugget</Form.Label>
                                <Form.Control type="text" placeholder="bug" />
                            </Form.Group>
                        </Form>
                        <div className="d-flex justify-content-end">
                            <Button onClick={handleSendNewProject} className="save-button-form">
                                Cadastrar
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
                                <span className="text-light">Novo Projeto</span>
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