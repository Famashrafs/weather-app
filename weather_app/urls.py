from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/<str:city_name>/', views.get_weather, name='get_weather'),
]
