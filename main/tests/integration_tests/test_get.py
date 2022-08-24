import requests

class TestGetClientsSemAutorizacao:
    
    url_base_clients = 'http://localhost:8000/api/v1/clientes/'

    def test_get_client_sem_autorizacao_por_token(self):

        resultado= requests.get(url=self.url_base_clients)
        assert resultado.json()['detail']== 'As credenciais de autenticação não foram fornecidas.'
        assert resultado.status_code == 401

class TestGetProjectsSemAutorizacao:
  

    url_base_projects = 'http://localhost:8000/api/v1/projetos/'

    def test_get_project_sem_autorizacao_por_token(self):
        
        resultado = requests.get(url=self.url_base_projects)
        assert resultado.json()['detail']== 'As credenciais de autenticação não foram fornecidas.'
        assert resultado.status_code == 401

class TestGetClientsTokenIvalido:

    headers ={'Authorization': 'Token 658a0fa9b5e469a22792558a413e8f9705b7a415'}
    url_base_clients = 'http://localhost:8000/api/v1/clientes/'

    def test_get_client_token_ivalido(self):

        resultado= requests.get(url=self.url_base_clients, headers = self.headers)
        assert resultado.json()['detail']== 'Token inválido.'
        assert resultado.status_code == 401

class TestGetProjectsTokenIvalido:

    headers ={'Authorization': 'Token 658a0fa9b5e469a22792558a413e8f9705b7a415'}
    url_base_projects = 'http://localhost:8000/api/v1/projetos/'

    def test_get_project_token_ivallido(self):
        
        resultado = requests.get(url=self.url_base_projects, headers = self.headers)
        assert resultado.json()['detail']== 'Token inválido.'
        assert resultado.status_code == 401

class TestGetClients:
  
    headers ={'Authorization': 'Token 658a0fa9b5e469a22792558a413e8f9705b7a414'} 

    url_base_clients = 'http://localhost:8000/api/v1/clientes/'

    def test_get_clients(self):
        resultado= clients = requests.get(url=self.url_base_clients, headers = self.headers)
        assert resultado.status_code == 200



class TestGetProjets:

    headers ={'Authorization': 'Token 658a0fa9b5e469a22792558a413e8f9705b7a414'} 

    url_base_projects = 'http://localhost:8000/api/v1/projetos/'

    def test_get_client(self):
        resultado = requests.get(url=self.url_base_projects, headers = self.headers)
        assert resultado.status_code == 200
