from django.contrib import admin
from .models import Project, Client, ClientDocument, ProjectDocument

admin.site.register(Client)
admin.site.register(ClientDocument)
admin.site.register(Project)
admin.site.register(ProjectDocument)
