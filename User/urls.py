from django.conf.urls import url
from User import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register/$', views.register, name='register'),
    url(r'^normallogin/$', views.normallogin, name='normallogin'),
    url(r'^phonelogin/$', views.phonelogin, name='phonelogin'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^myinfo/$', views.myinfo, name='myinfo'),
    url(r'^upload/$', views.upload, name='upload'),
    url(r'^myorder/$', views.myorder, name='myorder'),
    url(r'^orderdetail/$', views.orderdetail, name='orderdetail'),
    url(r'^orderticket/$', views.orderticket, name='orderticket'),
    url(r'^payment/$', views.payment, name='payment'),
]
r'show/(?P<name>[a-z]+)/(?P<age>\d+)/$'
