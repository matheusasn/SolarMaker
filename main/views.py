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
    search_fields = ['name', 'cpf_cnpj','adress','phone_number','email']


class ClientDocumentsViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ClientDocumentSerializer
    queryset = models.ClientDocument.objects.all()
    permission_classes = (IsAuthenticated,)

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProjectSerializer
    queryset = models.Project.objects.all()
    permission_classes = (IsAuthenticated,)
    filter_backends = [filters.SearchFilter]
    search_fields = ['project_name', 'description','responsible','vendor','status']

class ProjectDocumentsViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProjectDocumentSerializer
    queryset = models.ProjectDocument.objects.all()
    permission_classes = (IsAuthenticated,)

class FinanceViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.FinanceSerializer   
    queryset = models.Finance.objects.all()
    permission_classes = (IsAuthenticated,)

def get_finance(request):
    finance = models.Finance.objects.all()
    sum_profit = finance.aggregate(Sum('profit')).get('profit__sum') or 0.0
    sum_expenses = finance.aggregate(Sum('expenses')).get('expenses__sum') or 0.0
    total = sum_profit - sum_expenses
    output = {"Entrada": sum_profit, "Saida": sum_expenses, "Total": total}
    return JsonResponse(output)
