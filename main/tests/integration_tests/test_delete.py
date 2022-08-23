import requests


class TestDeleteCliente:
  
    headers ={'Authorization': 'Token 36fb287da614654a86a2efe38702358487dcc9ff'} 

    url_base_clients = 'http://localhost:8000/api/v1/clientes/'

    clients = requests.get(url=url_base_clients, headers = headers)
    cpf_cnpj= (clients.json()[0]['cpf_cnpj'])

    def test_delete_client(self):
        resultado= requests.delete(url=f'{self.url_base_clients}{self.cpf_cnpj}/', headers=self.headers)
        assert resultado.status_code == 204



class TestDeleteProjeto:

    headers ={'Authorization': 'Token 36fb287da614654a86a2efe38702358487dcc9ff'} 

    url_base_projects = 'http://localhost:8000/api/v1/projetos/'

    projects = requests.get(url=url_base_projects, headers = headers)
    primeiro_id= (projects.json()[0]['id'])
    

    def test_delete_project(self):
        resultado= requests.delete(url=f'{self.url_base_projects}{self.primeiro_id}/', headers=self.headers)
        assert resultado.status_code == 204
