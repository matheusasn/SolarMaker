import React, {useState, useEffect} from "react";
import {Navbar, Row, Col, Tabs, Tab, Container, Form, Button} from "react-bootstrap"
import { Link, useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BottomHeader from "../../layout/BottomHeader";
import InputMask from "react-input-mask";
import { toast } from 'react-toastify';
import api from "../../../service/api"
import "./formClient.css"

function FormClient(){
    const navigate = useNavigate();
    const location = useLocation();

    const [clients, setClients] = useState({
        name: "",
        email: "",
        phone_number: "",
        adress: "",
        cpf_cnpj: "",
    })

    const handleClients = (e) => {
        let id = e.target.id
        let value = e.target.value
        if(id === ""){
            id = "phone_number"
        }
        setClients( prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    let id = undefined;
    if (location.state) {
        id = location.state.id;
    }

    useEffect(() => {
        if (typeof id === "undefined") return;
            api.getClient(id).then((res) => {
                let client = {
                    name: res.name,
                    email: res.email,
                    phone_number: res.phone_number,
                    adress: res.adress,
                    cpf_cnpj: res.cpf_cnpj
                }
                setClients(client);
            });
    }, [id]);

    const handleSendNewClients = () => {
        if(clients.name === ""){
            toast.warning(`Nome obrigatório`);
        }else if(clients.email === "" || clients.email.indexOf(' ') >= 0 ){
            toast.warning(`Email invalido`);
        }else if(clients.phone_number === ""){
            toast.warning(`Telefone obrigatório`);
        }else if(clients.adress === ""){
            toast.warning(`Endereço obrigatório`);
        }else if(clients.cpf_cnpj === "" || clients.cpf_cnpj.length > 14 || clients.cpf_cnpj.length < 11 ){
            toast.warning(`CPF/CNPJ Invalido`);
        }else if(typeof id === "undefined"){
            api
            .sendClients(clients)
            .then((res) => {
                toast.success("Cliente cadastrado com sucesso!")
                navigate("/Clients");
            })
            .catch((e) => {
                console.log(e)
                toast.error(`Erro ao cadastrar cliente!`);
            });
        }
        else {
            console.log("fdfdfd")
            api.updateClients(id,clients).then(() => {
                toast.success("Cliente atualizado com sucesso")
                navigate("/Clients");
            }).catch((e) => {
                toast.error(`Erro: ${e.request.status}, Não foi possível atualizar cliente`);
            })
        }
        
    }
    
    const newClient = () => {
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
                                <Form.Control type="email" placeholder="Email" isInvalid={clients.email.indexOf(' ') >= 0}/>
                                <Form.Control.Feedback type="invalid">Email não pode possuir espaço</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="phone_number" required>
                                <Form.Label className="style-title">Telefone</Form.Label>
                                <InputMask
                                    name="phone_number" 
                                    mask="(99)99999-9999"
                                    className="form-control"
                                    placeholder="Telefone"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="adress" required>
                                <Form.Label className="style-title">Endereço</Form.Label>
                                <Form.Control type="text" placeholder="Endereço"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="cpf_cnpj" required>
                                <Form.Label className="style-title">CPF/CNPJ</Form.Label>
                                <Form.Control type="number" placeholder="CPF/CNPJ" isInvalid={clients.cpf_cnpj.length > 14}/>
                                <Form.Control.Feedback type="invalid">CNPJ invalido</Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </Container>
                    <div className="d-flex justify-content-end pb-4">
                        <Button onClick={handleSendNewClients} className="save-button-form">
                        {typeof id === "undefined" ? "Cadastrar" : "Atualizar"}
                        </Button>
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
                            <Link className="text-decoration-none" to="/Clients">
                            <ArrowBackIcon className="text-light" />
                                <span className="text-light">Cadastrar Cliente</span>
                            </Link>
                        </Col>
                    </Row>
                </Navbar.Brand>
            </BottomHeader>
            <Container>
                {newClient()}
            </Container>
        </>
    );
}

export default FormClient;