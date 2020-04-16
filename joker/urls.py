from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('get_joke', views.get_joke, name='get_joke'),
    path('save_joke', views.save_joke, name='save_joke'),
]