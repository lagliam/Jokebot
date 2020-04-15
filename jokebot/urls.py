# jokebot URL Configuration

from django.contrib import admin
from django.urls import path, include
from joker import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('joker.urls')),
]
