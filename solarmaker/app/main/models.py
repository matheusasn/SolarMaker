from django.db import models
from uuid import uuid4
from django.core.validators import RegexValidator

class Regex():

    phone_regex = RegexValidator(
                  regex=r'^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$', 
                  message="Número inválido, insira um número nos formatos: (11)1111-1111, (11)11111-1111 ou sem formatação")

    cpf_cnpj_regex = RegexValidator(
                  regex=r'([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})', 
                  message="CPF/CNPJ inválido, insira um número nos formatos: 000.000.000-00, 00.000.000/0000-00 ou sem formatação")

class Client(models.Model):

    name = models.CharField(max_length=255, verbose_name= 'Nome completo')

    email = models.EmailField(unique = True, max_length=100, verbose_name= 'Email')

    phone_number = models.CharField(validators=[Regex().phone_regex], max_length=15, blank=True, verbose_name= 'Telefone')

    adress = models.CharField(max_length=255, default = "", verbose_name= 'Endereço')     

    cpf_cnpj = models.CharField(validators=[Regex().cpf_cnpj_regex], max_length=20, primary_key = True, verbose_name= 'CPF/CNPJ')

    def __str__(self):
        return self.name

class ClientDocument(models.Model):

    client_name = models.ForeignKey(Client, default = "", on_delete=models.CASCADE, verbose_name= 'Cliente')

    date = models.DateField(auto_now_add=False, verbose_name= 'Data de recebimento')

    proxy = models.FileField(upload_to = 'client_documents/%Y/%m/%d', verbose_name= 'Procuração')

    contract = models.FileField(upload_to = 'client_documents/%Y/%m/%d', verbose_name= 'Contrato')

    def __str__(self):
        return str(self.client_name)

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

    budget = models.FloatField(max_length=100, verbose_name= 'Orçamento')

    def __str__(self):
        return self.project_name

class ProjectDocument(models.Model):

    project_name = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name= "Projeto")

    generating_account = models.FileField(upload_to = 'project_documents/%Y/%m/%d', verbose_name= 'Conta geradora')

    beneficiary_account = models.FileField(upload_to = 'project_documents/%Y/%m/%d', verbose_name= 'Conta beneficiária')

    documents = models.FileField(upload_to = 'project_documents/%Y/%m/%d', verbose_name= 'CPF, RG ou CNH')

    def __str__(self):
        return str(self.project_name)
