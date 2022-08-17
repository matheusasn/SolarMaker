from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAuthenticated

from . import models, serializers

class Teste(APIView):
    def get(self, request, format=None):
        return Response({
            'hello':'word'
        })

class ClientViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ClientSerializer
    queryset = models.Client.objects.all()
    permission_classes = (IsAuthenticated,)

class ClientDocumentsViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ClientDocumentSerializer
    queryset = models.ClientDocument.objects.all()
    permission_classes = (IsAuthenticated,)

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProjectSerializer
    queryset = models.Project.objects.all()
    permission_classes = (IsAuthenticated,)

class ProjectDocumentsViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProjectDocumentSerializer
    queryset = models.ProjectDocument.objects.all()
    permission_classes = (IsAuthenticated,)

