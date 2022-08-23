from django.test import TestCase


#Creat your tests here

class ClienteTestCase:
    def setUp(self):
        Client.objects.create(
            name='Kamila Silva',
            email='kamilas@gmail.com',
            phone_number='(83)99158-0844',
            adress='Rua 5',
            cpf_cnpj='70352072450'
        )
    def test_retorno_str(self):
        p1 = Client.objects.get(name = 'Kamila Silva')
        assert p1.__str__()=='Kamila Silva'