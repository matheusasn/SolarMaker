import React, {useState} from "react";
import {Navbar, Row, Col, Tabs, Tab, Container, Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BottomHeader from "../layout/BottomHeader";
import api from "../../service/api"
import "./user.css"

function User(){

    const [users, setUsers] = useState({
        name: "",
        email: "",
        cpf_cnpj: "",
        telefone: "",
        endereco: ""
    })


    const handleUsers = (e) => {
        let id = e.target.id
        let value = e.target.value

        setUsers( prevState => ({
            ...prevState,
            [id]: value
        }))
    }


    const handleSendNewUsers = () => {
        
        if(api.sendUsers(users)){
            return alert("Usuário criado com sucesso")
        }else{
            return alert("Erro ao criar Usuário")
        }

    }


    const FormNewUser = () => {
        return (
            <Tabs
                defaultActiveKey="user"
                id="newUser"
                className="mb-3"
                >
                <Tab eventKey="user" title="Usuario">
                    <Container>
                        <Form onChange={(e) => handleUsers(e)}>
                            <Form.Group className="mb-3" controlId="name" required>
                                <Form.Label className="style-title">Nome do usuário</Form.Label>
                                <Form.Control type="text" placeholder="Usuario" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email" required>
                                <Form.Label className="style-title">Email do usuário</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="telefone" required>
                                <Form.Label className="style-title">Telefone do usuário</Form.Label>
                                <Form.Control type="text" placeholder="Telefone" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="endereco" required>
                                <Form.Label className="style-title">Endereço do usuário</Form.Label>
                                <Form.Control type="text" placeholder="Endereco" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="cpf_cnpj" required>
                                <Form.Label className="style-title">CPF</Form.Label>
                                <Form.Control type="number" placeholder="CPF" />
                            </Form.Group>
                        </Form>
                    </Container>
                    <div className="d-flex justify-content-end">
                        <Link to="/">
                            <Button onClick={handleSendNewUsers} className="save-button-form">
                                Cadastrar
                            </Button>
                        </Link>
                    </div>
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
                                <span className="text-light">Novo Usuário</span>
                            </Link>
                        </Col>
                    </Row>
                </Navbar.Brand>
            </BottomHeader>
            <Container>
                {FormNewUser()}
            </Container>
        </>
    );
}

export default User;