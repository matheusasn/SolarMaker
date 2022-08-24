import requests

#Elaborar maior caso possivel de testes de unidade para POST , testando as entrados possiveis ou não , por exemplo, se o email e cpf está no fromaro correto...


class TestPostClient:

    headers ={'Authorization': 'Token 658a0fa9b5e469a22792558a413e8f9705b7a414'} 
    url_base_clients = 'http://localhost:8000/api/v1/clientes/'

    new_client1 = {
        "name": "Kamila Silva",
        "email": "kamilas@gmail.com",
        "phone_number": "(83)99158-0844",
        "adress":"Rua 5",
        "cpf_cnpj": "70352072450"
    }
    def test_post_client1(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client1)
        assert resultado.status_code == 201
    
    new_client2 = {
        "name": "Kamila Silva",
        "email": "kamilas@gmail.com",
        "phone_number": "(83)99158-0844",
        "adress":"Rua 5",
        "cpf_cnpj": "70352072440"
    }
    def test_post_client2(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client2)
        assert resultado.status_code == 201
    
    new_client_email_errado = {
        "name": "Cliente um",
        "email": "cliente1.com",
        "phone_number": "(83)99158-0844",
        "adress":"Rua 5",
        "cpf_cnpj": "10352072442"

    }
    def test_post_client_email_incorret(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client_email_errado)
        
        assert resultado.json()['email'] == ['Insira um endereço de email válido.']
        assert resultado.status_code == 400

    new_client_telefone_errado = {
        "name": "Cliente um",
        "email": "kamilas@gmail.com",
        "phone_number": "8399158-0844",
        "adress":"Rua 5",
        "cpf_cnpj": "10352072442"

    }
    def test_post_client_telefone_incorret(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client_telefone_errado)
        
        assert resultado.json()['phone_number'] == ['Número inválido, insira um número nos formatos: (11)1111-1111, (11)11111-1111 ou sem formatação']
        assert resultado.status_code == 400
    
    

class TestPostProject:

    headers ={'Authorization': 'Token 658a0fa9b5e469a22792558a413e8f9705b7a414'} 
    url_base_projects = 'http://localhost:8000/api/v1/projetos/'

    new_project1 = {
        "project_name": "SolarKamila",
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
        "project_name": "SolarKamila",
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