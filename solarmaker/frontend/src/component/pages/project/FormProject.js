import React, {useState} from "react";
import {Navbar, Row, Col, Tabs, Tab, Container, Form, Button} from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BottomHeader from "../../layout/BottomHeader";
import { toast } from 'react-toastify';
import api from "../../../service/api"
import "./project.css"

function Project(){
    const navigate = useNavigate();

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

    const handleProjects = (e) => {
        let id = e.target.id
        let value = e.target.value

        setProject( prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSendNewProject = () => {
        if(project.client === "" || project.client.length > 14 || project.client.length < 11 ){
            toast.warning(`CPF/CNPJ Invalido`);
        }else {
            api.getClient(project.client)
            .then((res) => {
                api.sendProjects(project)
                .then((res) => {
                    toast.success("Projeto cadastrado com sucesso");
                    navigate("/Projects");
                })
                .catch((e) => {
                    toast.error("Error: Não foi possível cadastrar projeto");
                });
            })
            .catch((e) => {
                toast.warning(`Cliente não está cadastrado`);
            });
        }
    }
    
    const FormNewProject = () => {
        return (
            <Tabs
                defaultActiveKey="Project"
                id="newProject"
                className="mb-3"
                >
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
                                <Form.Label className="style-title">CPF/CNPJ do Cliente</Form.Label>
                                <Form.Control type="number" placeholder="CPF/CNPJ" isInvalid={project.client.length > 14}/>
                                <Form.Control.Feedback type="invalid">CNPJ invalido</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="vendor">
                                <Form.Label className="style-title">Vendedor</Form.Label>
                                <Form.Control type="text" placeholder="Vendedor" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="potency">
                                <Form.Label className="style-title">Potencia</Form.Label>
                                <Form.Control type="number" placeholder="Potencia" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="status">
                                <Form.Label className="style-title">Status</Form.Label>
                                <Form.Label className="style-title">
                                    <Form.Select type="text" placeholder="bug">
                                        <option>Selecione uma opção</option>
                                        <option value="Em andamento">Em andamento</option>
                                        <option value="Aprovado">Aprovado</option>
                                        <option value="Vistoria">Solicidato vistoria</option>
                                        <option value="Concluído">Concluído</option>
                                    </Form.Select>
                                    </Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="modules">
                                <Form.Label className="style-title">Modules</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="inverter">
                                <Form.Label className="style-title">Inversor</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="budget">
                                <Form.Label className="style-title">Valor</Form.Label>
                                <Form.Control type="number" placeholder="valor" />
                            </Form.Group>
                        </Form>
                        <div className="d-flex justify-content-end pb-4">
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
                            <Link className="text-decoration-none" to="/Projects">
                            <ArrowBackIcon className="text-light" />
                                <span className="text-light">Cadastrar Projeto</span>
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