from rest_framework import serializers
from .models import Project, User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'project_name', 'client_cpf_cnpj', 'initial_data',
                  'final_data', 'status', 'budget']