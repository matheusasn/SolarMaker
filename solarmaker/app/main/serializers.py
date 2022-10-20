from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Project, Client
from django.contrib.auth.hashers import make_password
from rest_framework.validators import UniqueValidator

class UserManagerSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())]) 
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'is_staff', 'is_superuser']
    
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(UserManagerSerializer, self).create(validated_data)

class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ['name', 'email', 'phone_number', 'adress', 'cpf_cnpj', 'proxy', 'contract', 'date']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'project_name', 'client', 'description', 
                  'responsible', 'vendor', 'potency',
                  'modules', 'inverter', 'status', 'budget', 'amount_spent', 'generating_account',
                  'beneficiary_account', 'client_documents']
