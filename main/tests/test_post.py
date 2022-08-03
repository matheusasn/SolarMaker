import requests

#Elaborar maior caso possivel de testes de unidade para POST , testando as entrados possiveis ou não , por exemplo, se o email e cpf está no fromaro correto...
class TestPostUser:

    url_base_users = 'http://localhost:8000/users/'

    new_user = {
        "username": "me",
        "email": "me@me",
        "password": "me"  
    }

    def test_post_user(self):
        resultado = requests.post(url=self.url_base_users, data=self.new_user)
        assert resultado.status_code == 201


class TestPostProject:

    url_base_projects = 'http://localhost:8000/projects/'

    new_project = {
        "project_name": "SolarKamila",
        "client_cpf_cnpj": "12365478987",
        "initial_data": "2022-07-28",
        "final_data": "",
        "status": "Análise",
        "budget": 20.0
    }

    def test_post_project(self):
        resultado = requests.post(url=self.url_base_projects, data=self.new_project)
        assert resultado.status_code == 201

