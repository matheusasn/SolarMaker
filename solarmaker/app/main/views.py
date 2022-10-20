from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from . import models, serializers
from django.db.models import Sum
from django.http import JsonResponse

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters



class Teste(APIView):
    def get(self, request, format=None):
        return Response({
            'hello':'word'
        })

class UserManagerViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserManagerSerializer
    queryset = serializers.UserManagerSerializer.Meta.model.objects.all()
    permission_classes = [IsAdminUser]
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'email']

class ClientViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ClientSerializer
    queryset = models.Client.objects.all()
    permission_classes = (IsAuthenticated,)
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'cpf_cnpj','adress','phone_number','email', 'proxy', 'contract', 'date']

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProjectSerializer
    queryset = models.Project.objects.all()
    permission_classes = (IsAuthenticated,)
    filter_backends = [filters.SearchFilter]
    search_fields = ['project_name', 'client', 'description','responsible','vendor','potency', 
                     'modules', 'inverter', 'status', 'budget', 'amount_spent',
                     'generating_account', 'beneficiary_account', 'client_documents']

def get_project_value(request):
    project = models.Project.objects.all()
    sum_budget = project.aggregate(Sum('budget')).get('budget__sum') or 0.0
    sum_amount_spent = project.aggregate(Sum('amount_spent')).get('amount_spent__sum') or 0.0
    total = sum_budget - sum_amount_spent
    output = {"Entrada": sum_budget, "Saida": sum_amount_spent, "Total": total}
    return JsonResponse(output)

def get_user(request):
    serializer = serializers.UserManagerSerializer(request.user)
    return JsonResponse(serializer.data)

