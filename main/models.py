from django.db import models
from uuid import uuid4

class Client(models.Model):

    name = models.CharField(max_length=255, verbose_name= 'Nome completo')
    email = models.EmailField(max_length=100, verbose_name= 'Email')
    company_name = models.CharField(max_length=255, verbose_name= 'Nome da compania')
    cpf_cnpj = models.CharField(max_length=100, primary_key = True, verbose_name= 'CPF/CNPJ')

    def __str__(self):
        return self.name

class Project(models.Model):

    id = models.UUIDField(primary_key = True, default = uuid4, editable = False)
    project_name = models.CharField(max_length=255, verbose_name= 'Nome do projeto')
    client_cpf_cnpj = models.ForeignKey(Client, on_delete=models.PROTECT, verbose_name= 'CPF/CNPJ')
    description = models.CharField(max_length=255, default="", verbose_name= 'Descrição')
    responsible_person = models.CharField(max_length=255, default="", verbose_name= 'Responsável')
    representatives = models.CharField(max_length=255, default="", verbose_name= 'Representantes')
    initial_data = models.DateField(auto_now_add=False, verbose_name= 'Data de início')
    final_data = models.DateField(auto_now_add=False, null=True, blank=True, verbose_name= 'Data de término')
    StatusType = models.TextChoices('StatusType', 'Análise Aprovado Reprovado')
    status = models.CharField(max_length=100, choices=StatusType.choices, verbose_name= 'Status')
    budget = models.FloatField(max_length=100, verbose_name= 'Orçamento')

    def __str__(self):
        return self.project_name

