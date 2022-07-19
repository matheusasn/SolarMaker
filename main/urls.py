from django.urls import include, path
from rest_framework import routers

from main import views

router = routers.DefaultRouter()

# router.register('url..../', views.Modelo, basename='algumacoisa')

urlpatterns = [
    path('', include(router.urls)),
    path('teste/', views.Teste.as_view())
]