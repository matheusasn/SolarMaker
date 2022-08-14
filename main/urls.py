from django.urls import include, path
from rest_framework import routers
from django.contrib import admin

from main import views

router = routers.DefaultRouter()

# router.register('url..../', views.Modelo, basename='algumacoisa')

router.register(r'clientes', views.ClientViewSet, basename="Clientes")
router.register(r'projetos', views.ProjectViewSet, basename="Projetos")


urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/admin/', admin.site.urls),
    path('auth/', include('rest_framework.urls')),
    path('teste/', views.Teste.as_view())
]