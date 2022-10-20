from django.db import models
from uuid import uuid4
from django.core.validators import RegexValidator

class Regex():

    phone_regex = RegexValidator(
                  regex=r'^(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$', 
                  message="Número inválido, insira um número nos formatos: (11) 1234-1234 ou (11) 12345-1234")

    cpf_cnpj_regex = RegexValidator(
                  regex=r'([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})', 
                  message="CPF/CNPJ inválido, insira um número nos formatos: 000.000.000-00, 00.000.000/0000-00 ou sem formatação")

class Client(models.Model):

    name = models.CharField(max_length=255, verbose_name= 'Nome completo')

    email = models.EmailField(unique = True, max_length=100, verbose_name= 'Email')

    phone_number = models.CharField(validators=[Regex().phone_regex], max_length=15, blank=True, verbose_name= 'Telefone')

    adress = models.CharField(max_length=255, default = "", verbose_name= 'Endereço')     

    cpf_cnpj = models.CharField(validators=[Regex().cpf_cnpj_regex], max_length=20, primary_key = True, verbose_name= 'CPF/CNPJ')

    proxy = models.FileField(upload_to = 'client_documents/%Y/%m/%d', blank = True, null=True, verbose_name= 'Procuração')

    contract = models.FileField(upload_to = 'client_documents/%Y/%m/%d', blank = True, null=True, verbose_name= 'Contrato')

    date = models.DateField(auto_now_add = False, null=True, blank = True, verbose_name= 'Data de recebimento dos documentos')


    def __str__(self):
        return self.name


class Project(models.Model):

    id = models.UUIDField(primary_key = True, default = uuid4, editable = False, verbose_name= "ID")

    project_name = models.CharField(max_length=255, default = "", verbose_name= 'Nome do projeto')

    client = models.ForeignKey(Client, on_delete=models.PROTECT, verbose_name= 'Cliente')

    description = models.CharField(max_length=255, default="", verbose_name= 'Descrição')

    responsible = models.CharField(max_length=100, default = "", verbose_name= 'Responsável')

    vendor = models.CharField(max_length=100, default = "", verbose_name= 'Vendedor')

    potency = models.FloatField(max_length=100, default = 0.0, verbose_name= 'Potência')

    modules = models.CharField(max_length=100, default = "", verbose_name= 'Módulos')

    inverter = models.CharField(max_length=100, default = "", verbose_name= 'Inversor')
  
    status_choices = (
        ('Em andamento', 'Em andamento'),
        ('Aprovado', 'Aprovado'),
        ('Vistoria', 'Solicitado vistoria'),
        ('Concluído', 'Concluído'))

    status = models.CharField(max_length=50, choices=status_choices, verbose_name= 'Status')

    budget = models.FloatField(max_length=100, default = 0.0, verbose_name= 'Orçamento')

    amount_spent = models.FloatField(max_length=100, default = 0.0, verbose_name= 'Valor gasto')

    generating_account = models.FileField(upload_to = 'project_documents/%Y/%m/%d', blank = True, null=True, verbose_name= 'Conta geradora')

    beneficiary_account = models.FileField(upload_to = 'project_documents/%Y/%m/%d', blank = True, null=True, verbose_name= 'Conta beneficiária')

    client_documents = models.FileField(upload_to = 'project_documents/%Y/%m/%d', blank = True, null=True, verbose_name= 'CPF, RG ou CNH')
    
    def __str__(self):
        return self.project_name