from django.conf.urls import url
from User import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register/$', views.register, name='register'),
    url(r'^login/$', views.login, name='login'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^userinfo/$', views.userinfo, name='userinfo'),
    url(r'^userorder/$', views.userinfo, name='userorder'),
    url(r'^orderticket/$', views.orderticket, name='orderticket'),
    url(r'^payment/$', views.payment, name='payment'),
]
