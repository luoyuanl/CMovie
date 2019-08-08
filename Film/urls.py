from django.conf.urls import url
from Film import views

urlpatterns = [
    url(r'^index/$', views.index, name='index'),
]