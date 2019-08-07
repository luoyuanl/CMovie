from django.conf.urls import url
from Film import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]