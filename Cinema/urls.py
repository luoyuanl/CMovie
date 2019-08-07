from django.conf.urls import url
from Cinema import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]