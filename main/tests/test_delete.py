import requests


class TestDeleteCliente:
  
    headers ={'Authorization': 'Token 0c9c5fcff75f7ea6fde700ed12a84ae6f78ea2d7'}

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

    headers ={'Authorization': 'Token 0c9c5fcff75f7ea6fde700ed12a84ae6f78ea2d7'}

    url_base_projects = 'http://localhost:8000/api/v1/projetos/'

    projects = requests.get(url=url_base_projects, headers = headers)
    primeiro_id= (projects.json()[0]['id'])
    

    def test_delete_project(self):
        resultado= requests.delete(url=f'{self.url_base_projects}{self.primeiro_id}/', headers=self.headers)
        assert resultado.status_code == 204
        
    def test_delete_project_inexistente(self):
        resultado= requests.delete(url=f'{self.url_base_projects}id-nao-existe-34/', headers=self.headers)
        assert resultado.json()['detail'] == 'Não encontrado.'
        assert resultado.status_code == 404

class TestDeleteFinance:

    headers ={'Authorization': 'Token 0c9c5fcff75f7ea6fde700ed12a84ae6f78ea2d7'}

    url_base_finance = 'http://localhost:8000/api/v1/financas/'

    finance = requests.get(url=url_base_finance, headers = headers)
    primeiro_id= (finance.json()[0]['id'])
    

    def test_delete_finance(self):
        resultado= requests.delete(url=f'{self.url_base_finance}{self.primeiro_id}/', headers=self.headers)
        assert resultado.status_code == 204
        
    def test_delete_finance_inexistente(self):
        resultado= requests.delete(url=f'{self.url_base_finance}id-nao-existe-34/', headers=self.headers)
        assert resultado.json()['detail'] == 'Não encontrado.'
        assert resultado.status_code == 404

class TestDeleteVendedor:

    headers ={'Authorization': 'Token 0c9c5fcff75f7ea6fde700ed12a84ae6f78ea2d7'}

    url_base_vendedor = 'http://localhost:8000/api/v1/vendedores/'

    vendedor = requests.get(url=url_base_vendedor, headers = headers)
    primeiro_id= (vendedor.json()[0]['id'])
    

    def test_delete_vendedor(self):
        resultado= requests.delete(url=f'{self.url_base_vendedor}{self.primeiro_id}/', headers=self.headers)
        assert resultado.status_code == 204
        
    def test_delete_vendedor_inexistente(self):
        resultado= requests.delete(url=f'{self.url_base_vendedor}id-nao-existe-34/', headers=self.headers)
        assert resultado.json()['detail'] == 'Não encontrado.'
        assert resultado.status_code == 404
