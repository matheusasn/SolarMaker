from rest_framework import serializers
from .models import Project, Client, ClientDocument, ProjectDocument

class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ['name', 'email', 'phone_number', 'adress', 'cpf_cnpj']

class ClientDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientDocument
        fields = ['client_name', 'date', 
                  'proxy', 'contract']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'project_name', 'client', 'description', 
                  'responsible', 'vendor', 'potency',
                  'modules', 'inverter', 'status', 'budget']

class ProjectDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDocument
        fields = ['project_name', 'generating_account', 'beneficiary_account', 
                  'documents']

