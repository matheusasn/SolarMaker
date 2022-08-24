from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Project, Client, ClientDocument, ProjectDocument
from django.contrib.auth.hashers import make_password
from .models import Project, Client, ClientDocument, ProjectDocument


class UserManagerSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = User
        model.is_staff = True
        fields = ['id', 'username', 'email', 'password']
    
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(UserManagerSerializer, self).create(validated_data)

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

