from django.contrib import admin
from .models import Project, Client

admin.site.register(Client)
admin.site.register(Project)