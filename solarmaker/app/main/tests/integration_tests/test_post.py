import requests

#Elaborar maior caso possivel de testes de unidade para POST , testando as entrados possiveis ou não , por exemplo, se o email e cpf está no fromaro correto...


class TestPostClient:

    headers ={'Authorization': 'Token 658a0fa9b5e469a22792558a413e8f9705b7a414'} 
    url_base_clients = 'http://localhost:8000/api/v1/clientes/'

    new_client = {
        "name": "Kamila Silva",
        "email": "kamilas@gmail.com",
        "phone_number": "(83)99158-0844",
        "adress":"Rua 5",
        "cpf_cnpj": "70352072450"
    }
    def test_post_client(self):
        
        resultado = requests.post(url=self.url_base_clients, headers = self.headers, data=self.new_client)
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

    new_project = {
        "project_name": "SolarKamila",
        "client": "70352072490",
        "description": "projeto kamila",
        "responsible": "pessoa da equipe ?",
        "vendor": "bruno",
        "potency": 5,
        "modules": "qual dado",
        "inverter": "qual dado",
        "status": "Em andamento",
        "budget": 2
}


    def test_post_project(self):
        resultado = requests.post(url=self.url_base_projects, headers = self.headers, data=self.new_project)
        assert resultado.status_code == 201
    
    new_project_cliente_n_existe = {
        "project_name": "SolarKamila",
        "client": "70352072495",
        "description": "projeto kamila",
        "responsible": "pessoa da equipe ?",
        "vendor": "bruno",
        "potency": 5,
        "modules": "qual dado",
        "inverter": "qual dado",
        "status": "Em andamento",
        "budget": 2
}

    def test_post_project(self):
        resultado = requests.post(url=self.url_base_projects, headers = self.headers, data=self.new_project_cliente_n_existe )
        assert resultado.json()['client'] == ['Pk inválido "70352072495" - objeto não existe.']
        assert resultado.status_code == 400
    
    new_project_dado_em_branco = {
        "project_name": "SolarKamila",
        "client": "7035207249o",
        "description": "projeto kamila",
        "responsible": "pessoa da equipe ?",
        "vendor": "bruno",
        "potency": 5,
        "modules": "qual dado",
        "inverter": "qual dado",
        "status": "Em andamento",
        "budget": ""
}

    def test_post_project(self):
        resultado = requests.post(url=self.url_base_projects, headers = self.headers, data=self.new_project_dado_em_branco )
        assert resultado.json()['budget'] == ['Um número válido é necessário.']
        assert resultado.status_code == 400