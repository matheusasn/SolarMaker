from django.db import models
from uuid import uuid4

class User(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid4, editable = False)
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.username

class Client(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=100)
    company_name = models.CharField(max_length=255)
    cpf_cnpj = models.CharField(max_length=100, primary_key = True)

    def __str__(self):
        return self.name

class Project(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid4, editable = False)
    project_name = models.CharField(max_length=255)
    client_cpf_cnpj = models.ForeignKey(Client, on_delete=models.CASCADE)
    description = models.CharField(max_length=255, default="")
    responsible_person = models.CharField(max_length=255, default="")
    representatives = models.CharField(max_length=255, default="")
    initial_data = models.DateField(auto_now_add=False)
    final_data = models.DateField(auto_now_add=False, null=True, blank=True)
    StatusType = models.TextChoices('StatusType', 'Análise Aprovado Reprovado')
    status = models.CharField(max_length=100, choices=StatusType.choices)
    budget = models.FloatField(max_length=100)

    def __str__(self):
        return self.project_name

