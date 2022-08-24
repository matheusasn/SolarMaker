import requests


class TestDeleteCliente:
  
    headers ={'Authorization': 'Token 658a0fa9b5e469a22792558a413e8f9705b7a414'}

    url_base_clients = 'http://localhost:8000/api/v1/clientes/'

    clients = requests.get(url=url_base_clients, headers = headers)
    #cpf_cnpj= (clients.json()[0]['cpf_cnpj'])

    def test_delete_client(self):
        resultado= requests.delete(url=f'{self.url_base_clients}70352072440/', headers=self.headers)
        assert resultado.status_code == 204
        
    def test_delete_client_inexistente(self):
        resultado= requests.delete(url=f'{self.url_base_clients}12345678909/', headers=self.headers)
        assert resultado.json()['detail'] == 'Não encontrado.'
        assert resultado.status_code == 404

class TestDeleteProjeto:

    headers ={'Authorization': 'Token 658a0fa9b5e469a22792558a413e8f9705b7a414'}

    url_base_projects = 'http://localhost:8000/api/v1/projetos/'

    projects = requests.get(url=url_base_projects, headers = headers)
    primeiro_id= (projects.json()[0]['id'])
    

    def test_delete_project(self):
        resultado= requests.delete(url=f'{self.url_base_projects}{self.primeiro_id}/', headers=self.headers)
        assert resultado.status_code == 204
