from django.urls import path
from . import views

urlpatterns = [
    path("run-command/", views.run_command, name="run_command"),
]
