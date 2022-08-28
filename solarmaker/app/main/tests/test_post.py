import requests

#Elaborar maior caso possivel de testes de unidade para POST , testando as entrados possiveis ou não , por exemplo, se o email e cpf está no fromaro correto...


class TestPostClient:

    headers ={'Authorization': 'Token 29f9249bc5cd2d51070ebd15d59e8379ac988ef5'} 
    url_base_clients = 'http://localhost:8000/api/v1/clientes/'

    new_client_nulo = {
        "name": "",
        "email": "",
        "phone_number": "",
        "adress":"",
        "cpf_cnpj": ""
    }
    def test_post_client_nulo(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client_nulo)
        assert resultado.json()['name'] == ['Este campo não pode ser em branco.']
        assert resultado.json()['email'] == ['Este campo não pode ser em branco.']
        assert resultado.json()['cpf_cnpj'] == ['Este campo não pode ser em branco.']
        assert resultado.status_code == 400

    new_client1 = {
        "name": "Clinete um",
        "email": "clineteum@gmail.com",
        "phone_number": "(83)99150-0101",
        "adress":"Rua 5",
        "cpf_cnpj": "70352072440"
    }
    def test_post_client1(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client1)
        assert resultado.status_code == 201
    
    new_client2 = {
        "name": "Cliente dois",
        "email": "clientedois@gmail.com",
        "phone_number": "(83)99150-0102",
        "adress":"Rua 5",
        "cpf_cnpj": "70352072450"
    }
    def test_post_client2(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client2)
        assert resultado.status_code == 201
    
    new_client3 = {
        "name": "Cliente três",
        "email": "clinetetres@gmail.com",
        "phone_number": "(83)99150-0103",
        "adress":"Rua 5",
        "cpf_cnpj": "70352072460"
    }
    def test_post_client3(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client3)
        assert resultado.status_code == 201
    
    new_client4 = {
        "name": "Cliente três",
        "email": "clinetetres@gmail.com",
        "phone_number": "(83)99150-0103",
        "adress":"Rua 5",
        "cpf_cnpj": "70352072470"
    }
    def test_post_client4(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client4)
        assert resultado.json()['email'] == ['client com este Email já existe.']
        assert resultado.status_code == 400

    new_client5 = {
        "name": "Cliente cinco",
        "email": "clinetecinco@gmail.com",
        "phone_number": "(83)99150-0103",
        "adress":"Rua 5",
        "cpf_cnpj": "70352072460"
    }
    def test_post_client5(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client5)
        assert resultado.json()['cpf_cnpj'] == ['client com este CPF/CNPJ já existe.']
        assert resultado.status_code == 400
    
    new_client_email_errado = {
        "name": "Cliente um",
        "email": "cliente4.com",
        "phone_number": "(83)99158-0844",
        "adress":"Rua 5",
        "cpf_cnpj": "10352072442"

    }
    def test_post_client_email_incorret(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client_email_errado)
        
        assert resultado.json()['email'] == ['Insira um endereço de email válido.']
        assert resultado.status_code == 400

    new_client_telefone_errado = {
        "name": "Cliente cinco",
        "email": "cliente5@gmail.com",
        "phone_number": "8399158-0844",
        "adress":"Rua 5",
        "cpf_cnpj": "10352072442"

    }
    def test_post_client_telefone_incorret(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client_telefone_errado)
        
        assert resultado.json()['phone_number'] == ['Número inválido, insira um número nos formatos: (11)1111-1111, (11)11111-1111 ou sem formatação']
        assert resultado.status_code == 400

class TestPostProject:

    headers ={'Authorization': 'Token 29f9249bc5cd2d51070ebd15d59e8379ac988ef5'} 
    url_base_projects = 'http://localhost:8000/api/v1/projetos/'

    new_project_nulo = {
        "project_name": "",
        "client": "",
        "description": "",
        "responsible": "",
        "vendor": "",
        "potency": "",
        "modules": "",
        "inverter": "",
        "status": "",
        "budget": ""
        }

    def test_post_project_nulo(self):
        resultado = requests.post(url=self.url_base_projects, headers = self.headers, data=self.new_project_nulo )
        assert resultado.json()['client'] == ['Este campo não pode ser nulo.']
        assert resultado.json()['status'] == ['\"\" não é um escolha válido.']
        assert resultado.json()['budget'] == ['Um número válido é necessário.']
        assert resultado.status_code == 400

    new_project1 = {
        "project_name": "SolarKamila1",
        "client": "70352072450",
        "description": "nao tem descricao",
        "responsible": "pessoa 1",
        "vendor": "pessoa 2",
        "potency": 0.0,
        "modules": "modulo x",
        "inverter": "nao sei",
        "status": "Em andamento",
        "budget": 1.0
        }


    def test_post_project1(self):
        resultado = requests.post(url=self.url_base_projects, headers = self.headers, data=self.new_project1)
        assert resultado.status_code == 201
    
    new_project2 = {
        "project_name": "SolarKamila2",
        "client": "70352072450",
        "description": "nao tem descricao",
        "responsible": "pessoa 1",
        "vendor": "pessoa 2",
        "potency": 0.0,
        "modules": "modulo x",
        "inverter": "nao sei",
        "status": "Em andamento",
        "budget": 1.0
        }


    def test_post_project2(self):
        resultado = requests.post(url=self.url_base_projects, headers = self.headers, data=self.new_project2)
        assert resultado.status_code == 201
    
    new_project3 = {
        "project_name": "SolarKamila3",
        "client": "70352072460",
        "description": "nao tem descricao",
        "responsible": "pessoa 1",
        "vendor": "pessoa 2",
        "potency": 0.0,
        "modules": "modulo x",
        "inverter": "nao sei",
        "status": "Em andamento",
        "budget": 1.0
        }


    def test_post_project3(self):
        resultado = requests.post(url=self.url_base_projects, headers = self.headers, data=self.new_project3)
        assert resultado.status_code == 201
    
    new_project_cliente_n_existe = {
        "project_name": "SolarKamila",
        "client": "70352072455",
        "description": "nao tem descricao",
        "responsible": "pessoa 1",
        "vendor": "pessoa 2",
        "potency": 0.0,
        "modules": "modulo x",
        "inverter": "nao sei",
        "status": "Em andamento",
        "budget": 1.0
}

    def test_post_project_cliente_nao_existe(self):
        resultado = requests.post(url=self.url_base_projects, headers = self.headers, data=self.new_project_cliente_n_existe )
        assert resultado.json()['client'] == ['Pk inválido "70352072455" - objeto não existe.']
        assert resultado.status_code == 400
    
    new_project_dado_em_branco = {
        "project_name": "SolarKamila",
        "client": "70352072450",
        "description": "nao tem descricao",
        "responsible": "pessoa 1",
        "vendor": "pessoa 2",
        "potency": 0.0,
        "modules": "modulo x",
        "inverter": "nao sei",
        "status": "Em andamento",
        "budget": ""
}

    def test_post_project_sem_budget(self):
        resultado = requests.post(url=self.url_base_projects, headers = self.headers, data=self.new_project_dado_em_branco )
        assert resultado.json()['budget'] == ['Um número válido é necessário.']
        assert resultado.status_code == 400

class TestPostStaff:

    headers ={'Authorization': 'Token 29f9249bc5cd2d51070ebd15d59e8379ac988ef5'} 
    url_base_staff = 'http://localhost:8000/api/v1/vendedores/'

    new_staff1 = {
        "username": "FuncionarioUm",
        "email": "funcionarioum@gmail.com",
        "password": "func123",
        "is_staff": False,
        "is_superuser": False
        }


    def test_post_staff1(self):
        resultado = requests.post(url=self.url_base_staff, headers = self.headers, data=self.new_staff1)
        assert resultado.status_code == 201

    new_staff2 = {
        "username": "FuncionarioDois",
        "email": "funcionarioDois@gmail.com",
        "password": "func123",
        "is_staff": True,
        "is_superuser": True
        }


    def test_post_staff2(self):
        resultado = requests.post(url=self.url_base_staff, headers = self.headers, data=self.new_staff2)
        assert resultado.status_code == 201

    new_staff3 = {
        "username": "FuncionarioTres",
        "email": "funcionarioDois@gmail.com",
        "password": "func123",
        "is_staff": True,
        "is_superuser": True
        }


    def test_post_staff3(self):
        resultado = requests.post(url=self.url_base_staff, headers = self.headers, data=self.new_staff3)
        assert resultado.json()['email'] == ['Esse campo deve ser  único.']
        assert resultado.status_code == 400
    
    new_staff4 = {
        "username": "FuncionarioDois",
        "email": "funcionarioQuatro@gmail.com",
        "password": "func123",
        "is_staff": True,
        "is_superuser": True
        }

    def test_post_staff4(self):
        resultado = requests.post(url=self.url_base_staff, headers = self.headers, data=self.new_staff4)
        assert resultado.json()['username'] == ['Um usuário com este nome de usuário já existe.']
        assert resultado.status_code == 400
    
    new_staff5 = {
        "username": "FuncionarioCinco",
        "email": "funcionarioCinco@gmail.com",
        "password": "func123",
        "is_staff": True,
        "is_superuser": False
        }


    def test_post_staff5(self):
        resultado = requests.post(url=self.url_base_staff, headers = self.headers, data=self.new_staff5)
        assert resultado.status_code == 201
    
    new_staff6 = {
        "username": "FuncionarioSeis",
        "email": "funcionarioSeis@gmail.com",
        "password": "func123",
        "is_staff": False,
        "is_superuser": True
        }


    def test_post_staff6(self):
        resultado = requests.post(url=self.url_base_staff, headers = self.headers, data=self.new_staff6)
        assert resultado.status_code == 201

class TestPostFinance:

    headers ={'Authorization': 'Token 29f9249bc5cd2d51070ebd15d59e8379ac988ef5'} 
    url_base_finance = 'http://localhost:8000/api/v1/financas/'


    new_finance1 = {
        "profit": 200.0 ,
        "expenses": 300.0,
        "description": "Dia 1"
    }


    def test_post_finance1(self):
        resultado = requests.post(url=self.url_base_finance , headers = self.headers, data=self.new_finance1)
        assert resultado.status_code == 201

    new_finance2= {
        "profit": 5000.0 ,
        "expenses": 3000.0,
        "description": "Dia 15"
    }


    def test_post_finance2(self):
        resultado = requests.post(url=self.url_base_finance , headers = self.headers, data=self.new_finance2)
        assert resultado.status_code == 201