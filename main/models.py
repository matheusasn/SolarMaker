from django.db import models
from uuid import uuid4

class User(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid4, editable = False)
    username = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.username

class Project(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid4, editable = False)
    project_name = models.CharField(max_length=100)
    client_cpf_cnpj = models.CharField(max_length=100)
    initial_data = models.DateField(auto_now_add=False)
    final_data = models.DateField(auto_now_add=False, null=True, blank=True)
    status = models.CharField(max_length=100)
    budget = models.FloatField(max_length=100)

    def __str__(self):
        return self.project_name
