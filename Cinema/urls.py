from django.conf.urls import url
from Cinema import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^login/', views.login, name='login'),
    url(r'^info/', views.cinemainfo, name='info'),
    url(r'^halls/', views.halls, name='halls'),
    url(r'^schedule/', views.schedule, name='schedule'),
    url(r'^orderlist/', views.orderlist, name='orderlist'),
    url(r'^orderdetail/', views.orderdetail, name='index'),
]
