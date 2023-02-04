"""mm_python URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
#Here is where to Add the URL pattern to the main urls.py file in your project directory

from django.contrib import admin
from django.urls import include, path #make to include 'include' and 'path'
from . views import index #importing from /home/kali/Desktop/Sr/mm_python/mm_python/views.py for react

urlpatterns = [
    path('admin/', admin.site.urls),
    #saying any url that starts with 'myapp' should be rerouted to this area
    path('myapp/', include('myapp.urls')),

    path('hello/', include('hello.urls')),

    path('newyear/', include('newyear.urls')), #remember to put the comma ,

    path('tasks/', include('tasks.urls')),

    path('', index), #if someone calls this empty route it will call the index function
    
    #name of app folder
    path('', include('web_terminal.urls')),    
    
    #add additonal steps here
    path('', include('scanning.urls')),

#remember to put the comma ,
]
