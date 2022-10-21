import React, {useState, useEffect} from "react";
import {Navbar, Row, Col, Tabs, Tab, Container, Form, Button} from "react-bootstrap"
import { Link, useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BottomHeader from "../../layout/BottomHeader";
import { toast } from 'react-toastify';
import api from "../../../service/api"
import "./formUser.css"

function User(){
    const navigate = useNavigate();
    const location = useLocation();

    const [users, setUsers] = useState({
        username: "",
        email: "",
        password: "",
        is_staff: true,
    })

    const handleUsers = (e) => {
        let id = e.target.id
        let value = e.target.value
        
        if(id === "isSuperuser_false"){
            id = "is_superuser"
            value = false
        }else if (id === "isSuperuser_true"){
            id = "is_superuser"
            value = true
        }
        setUsers( prevState => ({
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
            api.getUser(id).then((res) => {
                let user = {
                    username: res.username,
                    email: res.email,
                    password: "",
                    is_staff: res.is_staff,
                    is_superuser: res.is_superuser
                }
                setUsers(user);
            });
    }, [id]);
    
    const handleSendNewUsers = () => {
        
        if(users.username.indexOf(' ') >= 0 || users.username === ""){
            toast.warning(`Nome de usuário invalido`);
        }else if (users.email.indexOf(' ') >= 0 || users.email === ""){
            toast.warning(`Email de usuário invalido`);
        }else if (users.password.indexOf(' ') >= 0 || users.password === ""){
            console.log(users)
            toast.warning(`Senha de usuário invalido`);
        } else if (users.is_superuser === undefined){
            toast.warning(`Selecione uma Especialidade`);
        } else if (typeof id === "undefined") {
            api.sendUsers(users).then(() => {
                toast.success("Usuário cadastrado com Sucesso")
                navigate("/Users");
            }).catch((e) => {
                toast.error(`Erro: ${e.request.status}, Não foi possível cadastrar usuário`);
            })
        } else {
            api.updateUser(id,users).then(() => {
                toast.success("Usuário atualizado com sucesso")
                navigate("/Users");
            }).catch((e) => {
                toast.error(`Erro: ${e.request.status}, Não foi possível atualizar usuário`);
            })
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
                            <Form.Group className="mb-3" controlId="username" required>
                                <Form.Label className="style-title">Nome do usuário</Form.Label>
                                <Form.Control type="text" placeholder="Usuario" required={true} isInvalid={users.username.indexOf(' ') >= 0} defaultValue={users.username} />
                                <Form.Control.Feedback type="invalid">Nome de usuário não pode possuir espaço</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email" required>
                                <Form.Label className="style-title">Email do usuário</Form.Label>
                                <Form.Control type="email" placeholder="Email" isInvalid={users.email.indexOf(' ') >= 0} defaultValue={users.email}/>
                                <Form.Control.Feedback type="invalid">Email do usuário não pode possuir espaço</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password" required>
                                <Form.Label className="style-title">senha</Form.Label>
                                <Form.Control type="password" placeholder="Usuario" required={true} isInvalid={users.password.indexOf(' ') >= 0} defaultValue={users.password}/>
                                <Form.Control.Feedback type="invalid">Senha de usuário não pode possuir espaço</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="speciality" required>
                                <Form.Label className="style-title">Especialidade</Form.Label>
                                <div key={`inline-radio`} className="d-flex justify-content-start">
                                    <Form.Check
                                        inline
                                        label="Vendedor"
                                        name="group1"
                                        type={"radio"}
                                        id={`isSuperuser_false`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Administrador"
                                        name="group1"
                                        type={"radio"}
                                        id={`isSuperuser_true`}
                                    />
                                </div>
                            </Form.Group>
                           
                            {/* <Form.Group className="mb-3" controlId="telefone" required>
                                <Form.Label className="style-title">Telefone do usuário</Form.Label>
                                <Form.Control type="text" placeholder="Telefone"/>
                                <Form.Control.Feedback type="invalid">{messageErro}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="endereco">
                                <Form.Label className="style-title">Endereço do usuário</Form.Label>
                                <Form.Control type="text" placeholder="Endereco"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="cpf_cnpj" required>
                                <Form.Label className="style-title">CPF</Form.Label>
                                <Form.Control type="number" placeholder="CPF" isInvalid={users.cpf_cnpj.indexOf(' ') >= 0} />
                                <Form.Control.Feedback type="invalid">CPF ou CNPJ do usuário não pode possuir espaço</Form.Control.Feedback>
                            </Form.Group> */}
                        </Form>
                    </Container>
                    <div className="d-flex justify-content-end pb-4">
                            <Button onClick={handleSendNewUsers} className="save-button-form">
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
                            <Link className="text-decoration-none" to="/Users">
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