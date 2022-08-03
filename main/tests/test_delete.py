import requests


class TestDeleteUser:
    url_base_users = 'http://localhost:8000/users/'

    users = requests.get('http://localhost:8000/users/')
    primeiro_id= (users.json()[0]['id'])
    

    def test_delete_user(self):
        resultado= requests.delete(url=f'{self.url_base_users}{self.primeiro_id}/')
        assert resultado.status_code == 204
        

class TestDeleteProjeto:
    url_base_projects = 'http://localhost:8000/projects/'

    projects = requests.get('http://localhost:8000/projects/')
    primeiro_id= (projects.json()[0]['id'])
    

    def test_delete_project(self):
        resultado= requests.delete(url=f'{self.url_base_projects}{self.primeiro_id}/')
        assert resultado.status_code == 204

