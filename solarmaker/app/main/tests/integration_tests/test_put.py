import requests


class TestPutClients:
    headers ={'Authorization': 'Token 658a0fa9b5e469a22792558a413e8f9705b7a414'} 
    url_base_clients = 'http://localhost:8000/api/v1/clientes/'

    clients = requests.get(url=url_base_clients, headers = headers)
    cpf_cnpj= (clients.json()[0]['cpf_cnpj'])


    new_client = {
        "name": "Kamila Silva",
        "email": "kamilas@gmail.com",
        "phone_number": "(83)99158-0860",
        "adress":"Rua 5",
        "cpf_cnpj": "70352072450"
    }
    def test_put_client(self):
        
        resultado = requests.put(url=f'{self.url_base_clients}{self.cpf_cnpj}/', headers = self.headers, data=self.new_client)
        assert resultado.status_code == 200

