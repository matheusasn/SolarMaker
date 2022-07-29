from django.contrib import admin
from .models import Project, User

admin.site.register(User)
admin.site.register(Project)