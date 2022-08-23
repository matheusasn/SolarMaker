import requests

class TestPutUser:

    url_base_users = 'http://localhost:8000/users/'
    users = requests.get(url_base_users)
    primeiro_id= (users.json()[0]['id'])
    
    new_user = {
        "username": "atualizado",
        "email": "me@me",
        
        "password": "me" 
    }

    def test_post_user(self):
        resultado = requests.put(url=f'{self.url_base_users}{self.primeiro_id}/', data=self.new_user)
        assert resultado.status_code == 200


class TestPutProject:

    url_base_projects = 'http://localhost:8000/projects/'
    projects = requests.get(url_base_projects )
    primeiro_id= (projects.json()[0]['id'])

    new_project = {
        "project_name": "SolarKamilaAtualizado",
        "client_cpf_cnpj": "12365478987",
        "initial_data": "2022-07-28",
        "final_data": "",
        "status": "Análise",
        "budget": 20.0
    }

    def test_post_project(self):
        resultado = requests.put(url=f'{self.url_base_projects}{self.primeiro_id}/', data=self.new_project)
        assert resultado.status_code == 200

