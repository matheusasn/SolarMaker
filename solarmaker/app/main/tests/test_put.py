import requests


class TestPutClients:
    headers ={'Authorization': 'Token 7788d06479c048fd17dbacc1d2d6e46628650621'} 
    url_base_clients = 'http://localhost:8000/api/v1/clientes/'

    clients = requests.get(url=url_base_clients, headers = headers)
    cpf_cnpj= (clients.json()[0]['cpf_cnpj'])


    new_client = {
        "name": "Kamila Silva",
        "email": "kamilas@gmail.com",
        "phone_number": "(83)99158-0845",
        "adress":"Rua 5",
        "cpf_cnpj": "70352072450"
    }
    def test_put_client(self):
        
        resultado = requests.put(url=f'{self.url_base_clients}70352072450/', headers = self.headers, data=self.new_client)
        assert resultado.status_code == 200

