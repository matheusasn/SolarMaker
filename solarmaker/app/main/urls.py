from email.mime import base
from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from main import views

router = routers.DefaultRouter()

# router.register('url..../', views.Modelo, basename='algumacoisa')

router.register(r'clientes', views.ClientViewSet, basename="Clientes")
router.register(r'projetos', views.ProjectViewSet, basename="Projetos")
router.register(r'projetos/documentos', views.ProjectViewSet, basename="Documentos dos Projetos")
router.register(r'clientes/documentos', views.ProjectViewSet, basename="Documentos dos Clientes")
router.register(r'vendedores', views.UserManagerViewSet, basename="Vendedores")
router.register(r'financas', views.FinanceViewSet, basename="Finanças")


urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('auth/', include('rest_framework.urls')),
    path('teste/', views.Teste.as_view()),
    path(
        "api/v1/api-token-auth/", obtain_auth_token, name="api_token_auth"
    ),
    path('api/v1/home', views.get_finance)
]