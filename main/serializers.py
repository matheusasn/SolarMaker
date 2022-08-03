from rest_framework import serializers
from .models import Project, User, Client

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ['name', 'email', 'company_name', 'cpf_cnpj']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'project_name', 'client_cpf_cnpj', 'description', 
                  'responsible_person', 'representatives', 'initial_data',
                  'final_data', 'status', 'budget']

