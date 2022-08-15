from django.urls import include, path
from rest_framework import routers

from main import views

router = routers.DefaultRouter()

# router.register('url..../', views.Modelo, basename='algumacoisa')

router.register(r'clientes', views.ClientViewSet, basename="Clientes")
router.register(r'projetos', views.ProjectViewSet, basename="Projetos")
router.register(r'projetos/documentos', views.ProjectViewSet, basename="Documentos dos Projetos")
router.register(r'clientes/documentos', views.ProjectViewSet, basename="Documentos dos Clientes")


urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('auth/', include('rest_framework.urls')),
    path('teste/', views.Teste.as_view())
]