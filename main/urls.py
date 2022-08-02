from django.urls import include, path
from rest_framework import routers

from main import views

router = routers.DefaultRouter()

# router.register('url..../', views.Modelo, basename='algumacoisa')

router.register(r'users', views.UserViewSet, basename="Users")
router.register(r'clients', views.ClientViewSet, basename="Clients")
router.register(r'projects', views.ProjectViewSet, basename="Projects")


urlpatterns = [
    path('', include(router.urls)),
    path('teste/', views.Teste.as_view())
]